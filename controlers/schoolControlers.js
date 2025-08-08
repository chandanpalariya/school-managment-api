

import db from '../config/db.js';
import { calculateDistance } from '../utils/distanceCalculator.js';

//  Add School Controller function
export const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    // Basic Validation
    if (!name || !address || !latitude || !longitude) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const query = `
      INSERT INTO schools (name, address, latitude, longitude)
      VALUES (?, ?, ?, ?)
    `;

    await db.execute(query, [name, address, latitude, longitude]);

    res.status(201).json({ message: 'School added successfully ✅' });
  } catch (error) {
    console.error('Error in addSchool:', error.message);
    res.status(500).json({ message: 'Server error ' });
  }
};

// List Schools function
export const listSchools = async (req, res) => {
  try {
    const userLat = parseFloat(req.query.latitude);
    const userLng = parseFloat(req.query.longitude);

    if (isNaN(userLat) || isNaN(userLng)) {
      return res.status(400).json({ message: 'Invalid latitude or longitude.' });
    }

    // Get all schools from DB
    const [schools] = await db.execute('SELECT * FROM schools');

    // Calculate distance for each school
    const schoolsWithDistance = schools.map((school) => {
      const distance = calculateDistance(userLat, userLng, school.latitude, school.longitude);
      return { ...school, distance };
    });

    // Sort schools by distance
    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.json(schoolsWithDistance);
  } catch (error) {
    console.error('Error in listSchools:', error.message);
    res.status(500).json({ message: 'Server error ' });
  }
};
