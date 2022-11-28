import React from 'react';

const Blog = () => {
    return (
        <div className='px-5 lg:px-28 py-5 lg:py-20'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded mb-2">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    There are four main types of state you need to properly manage in your React apps:
                    <br /> - Local state
                    <br /> - Global state
                    <br /> - Server state
                    <br /> - URL state

                    <br />Local (UI) state – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.

                    <br />  <br />Global (UI) state – Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                    <br />  <br />Server state – Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                    <br />  <br />URL state – Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state.
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded mb-2">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>The core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern</p>
                    <br />
                    <p>Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded mb-2">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?

                </div>
                <div className="collapse-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended.Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                        <br />Here are some reasons that why should we write unit tests.
                        <br /> - The earlier a problem is identified, the fewer compound errors occur.
                        <br /> - Costs of fixing a problem early can quickly outweigh the cost of fixing it later.
                        <br /> - Debugging processes are made easier.
                        <br /> - Developers can quickly make changes to the code base.
                        <br /> - Developers can also re-use code, migrating it to new projects.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded">
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>Pros and Cons of React <br />
                        pros:

                        <br /> - Fast loading of new data.
                        <br /> - One file contains both markup and logic (JSX).
                        <br /> - Enables the separation of data and presentation.
                        <br /> - It’s simple to get started and doesn’t take much practice.

                        <br /> cons:
                        <br /> - It is just a JavaScript library, not a framework.
                        <br /> - No possibility to implement MVC architecture.
                        <br /> - Frequently insufficient for developing a web app and necessitating the use of other libraries.
                        <br /> - Only worth using if web applications need to be highly interactive
                    </p>
                    <br /><p>Pros and Cons of Vue <br />
                        pros:
                        <br /> - A list of tools and libraries (Vue.js official CLI, Development Tools, Vue Loader, Vue Router).
                        <br /> - Flexibility and simplicity in the utilization.
                        Thorough documentation.
                        <br /> - Reusable in the terms of adding numerous reactive components to the existing code.
                        <br /> - The possibility of Component-Based Architecture (CBA)

                        <br />  cons:
                        <br /> - Limited community comparing to Angular and React
                        <br /> - The number of available plugins
                        <br /> - Language handicap because a large number of users are non-English speakers
                        <br /> - Overcomplications with flexibility
                    </p>
                    <br /><p>Pros and Cons of Angular <br />
                        pros:
                        <br /> - Allows MVC architecture.
                        <br /> - Good maintainability.
                        <br /> - Web applications built with Angular perform very well.
                        <br /> - Angular lets you manage microfrontend architecture
                        <br /> - Projects may now be developed, expanded, and generated more quickly thanks to technologies like the Angular-CLI command-line tool.

                        <br />  cons:
                        <br /> - Reloads the complete HTML tags tree structure.
                        <br /> - Slow loading time due to the Ionic app.
                        <br /> - Because of the given framework, Angular is relatively stiff and inflexible.
                        <br /> - To work with Angular.js, you need a certain training period.

                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;