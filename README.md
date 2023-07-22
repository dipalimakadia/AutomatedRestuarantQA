# Automated Restuarant Question Answering

Welcome to the automatic question answering application made for public places like restuarant. This is a cutting-edge application leveraging React, OpenAI API, FastAPI, Langchain, Python, and AWS services. The primary objective of this project is to revolutionize the customer experience at restaurants through an interactive question-answering app. The app allows users to effortlessly pose queries related to the restaurant, and in response, intelligently provides relevant answers extracted from the restaurant's menu. The backend seamlessly communicates with the OpenAI API, ensuring precise and accurate responses, while the frontend offers a user-friendly interface for smooth interactions. This project presents exciting possibilities, as it has the potential to significantly enhance customer engagement and satisfaction at public places like restaurants.



## Table of Contents
1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Project Structure](#project-structure)
5. [Contributing](#contributing)
## Requirements

Before setting up and using the project, ensure that you have the following installed:

- Node.js and npm (Node Package Manager) for the React frontend
- Python 3.x for the FastAPI backend
- An API key for the OpenAI GPT-3.5 language model (This project uses the OpenAI API)

## Installation

Follow the steps below to set up the project on your local machine:

### Frontend (React)

1. Open the terminal and navigate to the "Frontend" folder inside the main "Project" folder.

2. Install the required dependencies using npm:

```bash
npm install
```

### Backend (Python with FastAPI)

1. Ensure you have Python 3.x installed on your system.

2. Open the terminal and navigate to the "Backend" folder inside the main "Project" folder.

3. Create a virtual environment (optional but recommended):

```bash
python -m venv project-name
```

4. Activate the virtual environment:

   - For Windows:

   ```bash
   project-name\Scripts\activate
   ```

   - For macOS and Linux:

   ```bash
   source project-name/bin/activate
   ```

5. Install the necessary Python packages:

```bash
pip install uvicorn openai langchain tiktoken pypdf chromadb
```

6. Set the required environment variable for the OpenAI API key:

   - Replace `YOUR_OPENAI_API_KEY` with your actual API key in main.py.

### Project Structure

The project folder structure looks like this:

```
Project/
|-- Frontend/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |-- App.js
|   |   |-- index.js
|   |-- package.json
|   |-- ...
|
|-- Backend/
|   |-- Docs/
|   |   |-- restuarant_menu.pdf
|   |-- main.py
|   |-- ...
|
|-- README.md
```
## Usage

To run the project, follow the steps below:

### Frontend (React)

1. Open the terminal and navigate to the "Frontend" folder inside the main "Project" folder.

2. Start the React development server:

```bash
npm start
```

3. The React app should be accessible at `http://localhost:3000/` in your web browser.

### Backend (Python with FastAPI)

1. Open the terminal and navigate to the "Backend" folder inside the main "Project" folder.

2. Activate the virtual environment (if you created one):

   - For Windows:

   ```bash
   project-name\Scripts\activate
   ```

   - For macOS and Linux:

   ```bash
   source project-name/bin/activate
   ```

3. Run the FastAPI server using Uvicorn:

```bash
uvicorn main:app --reload
```

4. The FastAPI server should be running at `http://localhost:8000/`.

## Contributing
If you wish to contribute to this project, feel free to fork the repository and create a pull request with your changes. Be sure to follow the project's coding conventio
 
