# task-manager-cli
# Task Manager CLI

This is a **Node.js** project designed as a learning exercise to understand the basics of Node.js, working with the filesystem, and building a Command Line Interface (CLI) application.

## Features
- **Add Tasks**: Add tasks to a JSON file.
- **List Tasks**: View all the tasks saved in the JSON file.
- **Remove Tasks**: Remove a specific task by its index.

## How It Works
The project uses the filesystem module (`fs`) in Node.js to perform file operations like reading from and writing to a `tasks.json` file. Tasks are stored in a simple JSON format.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone  https://github.com/sudhanshushekharr/task-manager-cli.git
   cd repository-name
2.	Install dependencies:
	```bash
    npm install

(Note: This project doesn’t require any external dependencies at this stage.)

Usage
1.Add a task:

        node todo.js add "Your task here"
	
2.List all tasks:
     
        node todo.js list
	
3.Remove a task:
	
        node todo.js remove <task-number>
            
Learning Goals
	•	Understanding file operations in Node.js.
	•	Building a basic CLI application.
	•	Managing JSON data.

License

This project is for learning purposes and does not include a formal license.

Author

Sudhanshu Shekhar

