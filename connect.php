<?php
// Database credentials
$servername = "localhost"; // Change this if your database server is different
$username = "root"; // Database username
$password = ""; // Database password
$dbname = "contact_system"; // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if (isset($_POST['submit'])) {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Basic validation (you can expand this as needed)
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $message);

        // Execute the query
        if ($stmt->execute()) {
            echo "Thank you for your message!";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the prepared statement
        $stmt->close();
    } else {
        echo "All fields are required!";
    }
}

// Close connection
$conn->close();
?>
