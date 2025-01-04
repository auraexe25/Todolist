# To-Do Application

This project is a simple React-based To-Do application where users can:

- Add tasks to a to-do list.
- Mark tasks as complete.
- Delete tasks from the list.

## Features

1. **Add Tasks**: Users can input a task and add it to the list.
2. **Mark Tasks Complete**: Users can toggle tasks as complete/incomplete by clicking on the status icon.
3. **Delete Tasks**: Users can remove tasks from the list using the delete icon.

## Technologies Used

- **React**: For building the UI.
- **Tailwind CSS**: For styling the components.
- **JavaScript**: Logic and functionality.

## Folder Structure

```
project-folder/
├── src/
│   ├── components/
│   │   ├── Todo.jsx
│   │   ├── Todoitems.jsx
│   ├── assets/
│   │   ├── blankicon.jpg
│   │   ├── doneicon.jpg
│   │   ├── deleteicon.jpg
│   ├── App.js
│   ├── index.js
├── public/
│   ├── index.html
├── package.json
├── README.md
```

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/todo-app.git
   cd todo-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Components

### Todo.jsx
- The main component that handles the state of the to-do list and renders the UI for adding tasks.

### Todoitems.jsx
- A sub-component for rendering individual tasks with functionalities to mark as complete or delete.

## Future Enhancements

- **Persistent Storage**: Save tasks using `localStorage` or a backend API.
- **Filter Options**: Add functionality to filter tasks by complete/incomplete status.
- **Animations**: Use libraries like `Framer Motion` for smooth transitions.

## Screenshots

### Home Page
- A clean and responsive UI for managing tasks.

![Home Page Screenshot](https://via.placeholder.com/800x400)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- Icons from [Icons8](https://icons8.com/).
- Styling inspiration from Tailwind CSS documentation.

