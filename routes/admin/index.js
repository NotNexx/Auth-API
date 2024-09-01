const express = require("express");
const router = express.Router();
const db = require('../../utils/database');

// Admin Section Home
router.get("/", (req, res) => {
    res.send("This is the admin section");
});

// Test Route
router.get("/lol", (req, res) => {
    res.send("looool");
});

// Retrieve All Users
router.get("/users", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM users");
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

// Retrieve a User by ID
router.get("/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

// Update User Information
router.put("/users/:id", async (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;
    if (!username && !email) {
        return res.status(400).json({ message: "Missing fields" });
    }

    try {
        const fields = [];
        const values = [];
        let query = "UPDATE users SET";

        if (username) {
            fields.push("username = $1");
            values.push(username);
        }
        if (email) {
            fields.push("email = $2");
            values.push(email);
        }
        values.push(id);

        query += ` ${fields.join(", ")} WHERE id = $${values.length}`;

        await db.query(query, values);
        res.status(200).json({ message: "User updated" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

// Delete a User
router.delete("/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query("DELETE FROM users WHERE id = $1", [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;