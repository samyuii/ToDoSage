const About = () => {
    return (
        <div className="container mx-3 md:mx-auto my-5 p-5 min-h-[80vh] md:w-2/3">
            <h1 className="text-3xl font-bold text-center mb-6">About TodoSage </h1>
            <p className="text-lg mb-4">
                Welcome to <strong>TodoSage </strong> – your go-to solution for managing and organizing your to-do tasks in one place. Whether you have personal goals, work tasks, or just daily reminders, TodoSage  helps you stay on top of everything with ease and efficiency.
            </p>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Using TodoSage  in a Specific Browser</h2>
                <p className="text-lg mb-2">
                    For the best experience, we recommend using TodoSage  in a modern, up-to-date browser such as Google Chrome, Mozilla Firefox, or Microsoft Edge. Different browsers might handle local storage and JavaScript differently, which can affect how your tasks are saved and displayed.
                </p>
                <p className="text-lg mb-2">
                    TodoSage  relies on <strong>local storage</strong> to keep your to-do list persistent between sessions. Local storage is a feature of web browsers that allows the application to store data on your device. This means that your tasks, descriptions, due dates, and completed statuses are saved even when you close or refresh the browser.
                </p>
                <p className="text-lg mb-2">
                    By using TodoSage  in a single, consistent browser, you ensure that all your to-do data is properly saved and synchronized. Switching between browsers or clearing your local storage might lead to data loss, so it&apos;s best to stick with one browser for managing your tasks.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Best Practices for Using TodoSage </h2>
                <ul className="list-disc list-inside text-lg mb-2">
                    <li><strong>Regularly Update Your Tasks:</strong> Keep your to-do list up-to-date by regularly adding new tasks, marking completed ones, and editing or deleting outdated tasks.</li>
                    <li><strong>Use Clear Descriptions:</strong> Provide clear and concise descriptions for each task to ensure you understand what needs to be done.</li>
                    <li><strong>Set Realistic Due Dates:</strong> Assign realistic due dates to help you manage your time effectively and meet your deadlines.</li>
                    <li><strong>Bookmark TodoSage :</strong> You can bookmark TodoSage  for quick and easy access to your to-do list.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Contributing to TodoSage </h2>
                <p className="text-lg mb-2">
                    Whether you&apos;re a developer, designer, or just someone with great ideas, there are many ways you can get involved:
                </p>
                <ul className="list-disc list-inside text-lg mb-2">
                    <li><strong>Submit Bug Reports:</strong> If you find any bugs or issues, please report them on our <a href="https://github.com/theSamyak/ToDoSage/issues" className="text-blue-500">GitHub Issues</a> page.</li>
                    <li><strong>Suggest Features:</strong> Have an idea for a new feature? Let us know by creating an issue or starting a discussion on our <a href="https://github.com/theSamyak/ToDoSage/discussions/" className="text-blue-500">GitHub Discussions</a> page.</li>
                    <li><strong>Contribute Code:</strong> If you&apos;re a developer, you can fork the repository, make improvements, and submit a pull request. Check out our <a href="https://github.com/theSamyak/ToDoSage" className="text-blue-500">GitHub Repository</a> for more details.</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
