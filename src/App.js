import './App.css';

function App() {
  return (
    <div style={{margin:"auto", width:"700px", border:"3px solid rgb(107, 200, 120)", background:"rgb(77, 128, 88)", borderRadius:"35px", padding:"10px 50px 10px", fontFamily:"monospace", fontSize:"20px", marginTop:"50px"}}>
        <p style={{color: "white"}}>
          I first installed Node.js from the designated Node website, then installed npm through the command line. Then, I was able to use the npx create-react-app command through the command line, allowing me to create a React application with a folder in my local directory. 
          I then edited the source file to design this webpage and added packages and deploy scripts. 
          <br/><br/>
          Afterwards, I went on Github to create a repository to host the webpage I created. 
          Using Git I pushed the source code of the script to the repository and deployed it. This allowed me to have a designated website to display the code I wrote.
        </p>
        <p style={{color: "white"}}>
        <br/><br/>
          One difficulty I encountered was understanding how to link React to Github to host my webpage.
          For example, I had to add a dependency package to allow my build to be published properly on Github pages.
          Additionally, I had to add deploy scripts by configuring the built in package file.
          <br/><br/>
          Another difficulty I encountered was using Git and the various commands needed to properly push my changes to the repository.
          For example, I had to use different Git commands to initialize my project, add the new files, commit the changes, then finally push to the repository.
          However, overall I believe this was a good learning experience.
        </p>
    </div>
  );
}

export default App;