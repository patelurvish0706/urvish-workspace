import React from "react";
import { useEffect } from "react";
import "../App.css";

function Content() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // optional: animate only once
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="Content">
        <div className="fade-up" id="about">
          {" "}
          <p className="fade-up">
            I am a <spantext>Java developer</spantext> with hands-on experience
            in <spantext>Java, Spring Boot, REST APIs, JPA/Hibernate,</spantext>{" "}
            and <spantext>MySQL</spantext>. I enjoy building backend
            applications and working on real-world problems through clean and
            structured code. I am particularly interested in developing{" "}
            <spantext>reliable APIs</spantext> and understanding how
            applications work behind the scenes.
          </p>
          <p className="fade-up">
            My main interest is{" "}
            <spantext>Java and Spring Boot development</spantext>. I enjoy
            working with{" "}
            <spantext>
              REST APIs, database integration, authentication, validation,
              exception handling,
            </spantext>{" "}
            and <spantext>backend architecture</spantext>. I am continuously
            improving my understanding of Spring Boot and related technologies
            by building practical projects.
          </p>
          <p className="fade-up">
            I am looking to grow further as a{" "}
            <spantext>Java Backend/Full Stack Developer</spantext> and gain
            deeper knowledge of{" "}
            <spantext>Spring Boot, application development,</spantext> and{" "}
            <spantext>software engineering practices</spantext>. I enjoy
            learning new concepts, solving problems, and turning ideas into
            working applications.
          </p>{" "}
        </div>

        {/* <div className="fade-up" id="skills">
          <h5>Skills</h5>

          <div id="skillCard">
            <div id="skillField">Web Development</div>
            <div id="skillList">
              <div id="skillListSet"> <skill>HTML</skill> <skill>CSS</skill>   <skill>JavaScript</skill> </div>
              <div id="skillListSet"> <skill>PHP</skill> <skill>MySql</skill>  <skill>React.js</skill> </div>
              <div id="skillListSet"> <skill>Git/GitHub</skill> <skill>XAMPP</skill> <skill>VSCode</skill> </div>
            </div>
          </div>

          <div id="skillCard">
            <div id="skillField">Data Analysis (Learning)</div>
            <div id="skillList">
              <div id="skillListSet"> <skill>Excel</skill> <skill>PowerBI</skill>  <skill>MySql</skill> </div>
              <div id="skillListSet"> <skill>Python (Basics, Pandas)</skill></div>
              <div id="skillListSet"> <skill>Data Cleaning & Visualization</skill> </div>
            </div>
          </div>

          <div id="skillCard">
            <div id="skillField">Salesforce (Learning)</div>
            <div id="skillList">
              <div id="skillListSet"><skill>CRM Basics</skill></div>
              <div id="skillListSet"><skill>Salesforce Administrator</skill></div>
              <div id="skillListSet"><skill>User & Data Management</skill></div>
              <div id="skillListSet"><skill>Workflow Automation</skill></div>
            </div>
          </div>

          <div id="BoxLink">
            <a href="https://docs.google.com/document/d/1dHw40rRaKqDiLf6PDNYzV6CrzgvJ7d0BtaqogfGR0R0" target='_blank'>Viéw Full Résumé⌝</a>
          </div>
        </div> */}

        <div className="fade-up" id="skills">
          <h5>Skills</h5>

          <div id="skillCard">
            <div id="skillField">Java & Core Concepts</div>
            <div id="skillList">
              <div id="skillListSet">
                <skill>Core Java</skill> <skill>OOP</skill>{" "}
                <skill>Collections</skill>
              </div>
              <div id="skillListSet">
                <skill>Exception Handling</skill> <skill>Java 8</skill>{" "}
                <skill>Streams</skill>
              </div>
              <div id="skillListSet">
                <skill>Lambda Expressions</skill> <skill>Multithreading</skill>{" "}
                <skill>Generics</skill>
              </div>
            </div>
          </div>

          <div id="skillCard">
            <div id="skillField">Frontend & Web</div>
            <div id="skillList">
              <div id="skillListSet">
                <skill>HTML5</skill> <skill>CSS3</skill>{" "}
                <skill>JavaScript ES6</skill>
              </div>
              <div id="skillListSet">
                <skill>React.js</skill> <skill>Bootstrap</skill>{" "}
                <skill>Fetch API</skill>
              </div>
              <div id="skillListSet">
                <skill>Responsive Web Design</skill>{" "}
                <skill>API Integration</skill>
              </div>
            </div>
          </div>

          <div id="skillCard">
            <div id="skillField">Backend Development</div>
            <div id="skillList">
              <div id="skillListSet">
                <skill>Spring Boot</skill> <skill>Spring MVC</skill>{" "}
                <skill>Spring Security</skill>
              </div>
              <div id="skillListSet">
                <skill>REST APIs</skill> <skill>CRUD Operations</skill>{" "}
                <skill>JPA</skill>
              </div>
              <div id="skillListSet">
                <skill>Hibernate</skill> <skill>JDBC</skill>{" "}
                <skill>Bean Validation</skill>
              </div>
              <div id="skillListSet">
                <skill>JWT Authentication</skill>{" "}
                <skill>Exception Handling</skill>
              </div>
              <div id="skillListSet">
                <skill>API Integration</skill>
              </div>
            </div>
          </div>

          <div id="skillCard">
            <div id="skillField">Database & SQL</div>
            <div id="skillList">
              <div id="skillListSet">
                <skill>MySQL</skill> <skill>PostgreSQL</skill>{" "}
                <skill>MSSQL</skill>
              </div>
              <div id="skillListSet">
                <skill>SQL</skill> <skill>Database Design</skill>{" "}
                <skill>Joins</skill>
              </div>
              <div id="skillListSet">
                <skill>Relationships</skill> <skill>Normalization</skill>{" "}
                <skill>Queries</skill>
              </div>
            </div>
          </div>

          <div id="skillCard">
            <div id="skillField">Development Tools</div>
            <div id="skillList">
              <div id="skillListSet">
                <skill>Git</skill> <skill>GitHub</skill> <skill>Maven</skill>
              </div>
              <div id="skillListSet">
                <skill>Postman</skill> <skill>IntelliJ IDEA</skill>{" "}
                <skill>VS Code</skill>
              </div>
              <div id="skillListSet">
                <skill>XAMPP</skill> <skill>Git Workflow</skill>{" "}
                <skill>AI Tools</skill>
              </div>
            </div>
          </div>

          <div id="skillCard">
            <div id="skillField">Software Development</div>
            <div id="skillList">
              <div id="skillListSet">
                <skill>MVC Architecture</skill> <skill>SDLC</skill>{" "}
                <skill>Debugging</skill>
              </div>
              <div id="skillListSet">
                <skill>Clean Code</skill> <skill>Validation</skill>{" "}
                <skill>Error Handling</skill>
              </div>
              <div id="skillListSet">
                <skill>Problem Solving</skill>{" "}
                <skill>Analytical Thinking</skill>
              </div>
              <div id="skillListSet">
                <skill>Team Collaboration</skill>
              </div>
            </div>
          </div>

          <div id="BoxLink">
            <a
              href="https://docs.google.com/document/d/1ujW6JoiCzUI0UTqr_VXgOAmD5OQ3M7byw27M6pMoXbk"
              target="_blank"
            >
              Viéw Full Résumé⌝
            </a>
          </div>
        </div>

        <div className="fade-up" id="experiance">
          <h5>Experiance</h5>

          <div id="ExpCard">
            {" "}
            <div id="ExpTitle">
              JAN -{" "}
              {new Date()
                .toLocaleString("en-US", { month: "short" })
                .toUpperCase()}{" "}
              {new Date().getFullYear()}
            </div>{" "}
            <div id="ExpInfo">
              {" "}
              <div id="ExpCompanyName">
                {" "}
                Grras IT Solutions Pvt. Ltd. [Java Full Stack Developer]{" "}
              </div>
              <div id="ExpList">
                {" "}
                ● Developed REST APIs using Java, Spring Boot, JPA/Hibernate,
                and MySQL
              </div>
              <div id="ExpList">
                {" "}
                ● Worked on CRUD, MVC, validation, exception handling, and API
                integration
              </div>
              <div id="ExpList">
                {" "}
                ● Implemented authentication with Spring Security & JWT and
                tested APIs using Postman
              </div>
              <div id="ExpProject">
                {" "}
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/profilerX"
                  target="_blank"
                >
                  {" "}
                  ProfilerX - Own Your Profile 🔥 [Github] ↗{" "}
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>Java</skill> <skill>Spring Boot</skill>{" "}
                <skill>Spring Security</skill> <skill>REST APIs</skill>
              </div>
              <skill>JPA</skill> <skill>Hibernate</skill> <skill>MySQL</skill>{" "}
              <skill>React.js</skill>
            </div>
          </div>

          <div id="ExpCard">
            <div id="ExpTitle">JULY - AUG 2025</div>
            <div id="ExpInfo">
              <div id="ExpCompanyName">
                CreArt Solution Ptv. Ltd. [React.Js Intern]
              </div>
              <div id="ExpList">
                ● Worked on React component building, routing, and state basics
              </div>
              <div id="ExpList">
                ● Gained experience in JSX, props, basic UI handling and Cors
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/Locify-PasswordManager"
                  target="_blank"
                >
                  Locify - Password Manager WebApp 🔐 [Github] ↗
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>React.js</skill> <skill>JavaScript</skill>{" "}
                <skill>PHP</skill> <skill>MySql</skill>
              </div>
            </div>
          </div>
        </div>

        <div className="fade-up" id="Projects">
          <h5>Projects</h5>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img
                src="https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?_gl=1*sp1d26*_ga*MTI2NTk5NDI3OS4xNzkwMzE3ODM0*_ga_8JE65Q40S6*czE3OTAzMTc4MzQkbzEkZzEkdDE3OTAzMTc4NTIkajQyJGwwJGgw"
                alt="ProfilerX"
                srcSet=""
              />
            </div>

            <div id="projInfo">
              <div id="projTitle">
                💼 ProfilerX [Developer Portfolio Platform]
              </div>

              <div id="projDesc">
                Full-stack developer portfolio platform built with Java and
                Spring Boot, allowing developers to create, customize, and
                manage public profiles, projects, skills, experience,
                certificates, and blogs with secure authentication.
              </div>

              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/ProfilerX"
                  target="_blank"
                >
                  ProfilerX [Github] ↗
                </a>{" "}
              </div>

              <div id="ExpSkillList">
                <skill>Java</skill> <skill>Spring Boot</skill>{" "}
                <skill>Spring Security</skill> <skill>REST APIs</skill>{" "}
              </div>

              <div id="ExpSkillList">
                <skill>JPA/Hibernate</skill> <skill>PostgreSQL</skill>{" "}
                <skill>React.js</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="../Pro-Pims.png" alt="" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">⚕️PIMS [Patient-Info-hub]</div>
              <div id="projDesc">
                Web-based healthcare management solution designed for hospitals
                to streamline appointment scheduling, doctor-patient
                interactions, nurse coordination, and report tracking — all
                while ensuring role-based access and data security.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/Patient-Info-hub"
                  target="_blank"
                >
                  Patient-Info-hub [Github] ↗
                </a>{" "}
                <a
                  href="https://github.com/patelurvish0706/Patient-Info-hub/blob/main/Screenshots.md"
                  target="_blank"
                >
                  Screenshots ↗
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>JavaScript</skill> <skill>PHP</skill>{" "}
                <skill>MySql</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="../Pro-Locify.png" alt="" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">🔐 Locify Passwords Manager WebApp</div>
              <div id="projDesc">
                Locify is a sites' passwords manager built with React and PHP.
                📦 Users can register, log in, and securely store website
                credentials. 🔍 Includes profile password verification and clean
                UI for viewing data. 🚀 Built for secure and easy personal
                credential management.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/Locify-PasswordManager"
                  target="_blank"
                >
                  Locify [Github] ↗
                </a>{" "}
                <a
                  href="https://github.com/patelurvish0706/Locify-PasswordManager/blob/main/Screenshot/locify.png"
                  target="_blank"
                >
                  Screenshots ↗
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>React.js</skill> <skill>PHP</skill> <skill>MySql</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="../Pro-TechPha.png" alt="" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">🔦 Techno Pharms</div>
              <div id="projDesc">
                Web solution designed to help users diagnose and resolve issues
                related to mobiles, laptops, and PCs through a combination of
                AI-driven chat, YouTube video suggestions, and direct technician
                (shopkeeper) support.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/TechnoPharms"
                  target="_blank"
                >
                  Techno Pharms [Github] ↗
                </a>{" "}
                <a
                  href="https://github.com/patelurvish0706/TechnoPharms/blob/main/screenshot.md"
                  target="_blank"
                >
                  Screenshots ↗
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>JavaScript</skill> <skill>PHP</skill>{" "}
                <skill>MySql</skill> <skill>OpenRouter AI</skill>{" "}
                <skill>Youtube API</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="../Pro-Compiler.png" alt="" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">🔥JavaScript Compiler</div>
              <div id="projDesc">
                An In-browser JavaScript code compiler built using pure HTML,
                CSS, and JavaScript. ✨ Write, run, and test JS code directly in
                the browser — no frameworks, no libraries.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/JavaScriptCompiler"
                  target="_blank"
                >
                  JavaScript Compiler [Github] ↗
                </a>{" "}
                <a
                  href="https://patelurvish0706.github.io/JavaScriptCompiler/Compiler/"
                  target="_blank"
                >
                  {" "}
                  🟢 Try Now ↗
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>HTML</skill> <skill>CSS</skill> <skill>JavaScript</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="../Pro-Recurio.png" alt="" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">🎯Recurio</div>
              <div id="projDesc">
                AI-based solution that analyzes multiple PDF and image files,
                scans them, and identifies common, repeated, and twisted
                versions of questions. It also suggests possible questions that
                may appear in upcoming exams to Score higher.
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/Recurio"
                  target="_blank"
                >
                  Recurio [Github] ↗
                </a>{" "}
                <a
                  href="https://github.com/patelurvish0706/Recurio/blob/main/screenshot.md"
                  target="_blank"
                >
                  Screenshots ↗
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>Python</skill> <skill>JavaScript</skill>{" "}
                <skill>OpenRouter AI</skill>
              </div>
            </div>
          </div>

          <div className="fade-up" id="projCard">
            <div id="projImage">
              <img src="../Pro-Authentic.png" alt="" srcSet="" />
            </div>
            <div id="projInfo">
              <div id="projTitle">🛡️Authentication System</div>
              <div id="projDesc">
                Login and signup system with enhanced security measures with
                many input validations and query sanitization (to prevent SQL
                injections).
              </div>
              <div id="ExpProject">
                ⫱{" "}
                <a
                  href="https://github.com/patelurvish0706/Authentication_System"
                  target="_blank"
                >
                  Authentication System [Github] ↗
                </a>{" "}
                <a
                  href="https://github.com/patelurvish0706/Authentication_System/blob/main/screenshot.md"
                  target="_blank"
                >
                  Screenshots ↗
                </a>{" "}
              </div>
              <div id="ExpSkillList">
                <skill>HTML</skill> <skill>CSS</skill> <skill>JavaScript</skill>{" "}
                <skill>PHP</skill> <skill>MySql</skill>
              </div>
            </div>
          </div>
        </div>

        <div className="fade-up" id="BoxLink">
          <a
            href="https://github.com/patelurvish0706?tab=repositories"
            target="_blank"
          >
            Viéw All Projécts⌝
          </a>
        </div>

        <div className="fade-up" id="education">
          <h5>Education</h5>

          <div id="ExpCard">
            <div id="ExpTitle">2023 - 2026</div>
            <div id="ExpInfo">
              <div id="ExpCompanyName">
                📜 Bachelor of Engineering [Information Technology]
              </div>
              <div id="ExpList">
                ● Shree Swaminaray Institute of Technology, Ahmedabad
              </div>
              <div id="ExpList">● Gujarat Technological University - GTU</div>
              <div id="ExpProject">
                ⫱ <a>CGPA - 8.77</a>{" "}
              </div>
              {/* <div id="ExpSkillList"><skill>React.js</skill> <skill>JavaScript</skill> <skill>PHP</skill> <skill>MySql</skill></div> */}
            </div>
          </div>

          <div id="ExpCard">
            <div id="ExpTitle">2021 - 2023</div>
            <div id="ExpInfo">
              <div id="ExpCompanyName">
                📜 Diploma of Engineering [Information Technology]
              </div>
              <div id="ExpList">● Government Polytechnic, Gandhinagar 623</div>
              <div id="ExpList">● Gujarat Technological University - GTU</div>
              <div id="ExpProject">
                ⫱ <a>CGPA - 8.22</a>{" "}
              </div>
              {/* <div id="ExpSkillList"><skill>React.js</skill> <skill>JavaScript</skill> <skill>PHP</skill> <skill>MySql</skill></div> */}
            </div>
          </div>
        </div>

        <div className="fade-up" id="Certies">
          <h5>Certificates</h5>

          <div className="fade-up" id="certiCard">
            <div id="CertiImage">
              <img
                src="https://certificates.dev/.netlify/images?url=%2Fimages%2Ftech%2Freact%2Fhero-mobile-tablet.png"
                alt=""
                srcSet=""
              />
            </div>
            <div id="CertiInfo">
              <div id="CertiTitle">
                <a href="./JavaStack.pdf" target="_blank">
                  Java FullStack Developer - Trainee
                </a>{" "}
                ↗
              </div>
              <div id="CertiTitle2">• Grras Solution Pvt Ltd.</div>
            </div>
          </div>

          <div className="fade-up" id="certiCard">
            <div id="CertiImage">
              <img
                src="https://certificates.dev/.netlify/images?url=%2Fimages%2Ftech%2Freact%2Fhero-mobile-tablet.png"
                alt=""
                srcSet=""
              />
            </div>
            <div id="CertiInfo">
              <div id="CertiTitle">
                <a href="./15DaysReact.pdf" target="_blank">
                  15-Days Summer Internship on React.js
                </a>{" "}
                ↗
              </div>
              <div id="CertiTitle2">• CreArt Solution Pvt Ltd.</div>
            </div>
          </div>

          <div className="fade-up" id="certiCard">
            <div id="CertiImage">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20241014123804583631/Salesforce-Certified-Administrator-Online-Course-by-GeeksforGeeks.webp"
                alt=""
                srcSet=""
              />
            </div>
            <div id="CertiInfo">
              <div id="CertiTitle">
                <a
                  href="https://media.geeksforgeeks.org/courses/certificates/59df7637023bd65fb79c79d743d7ab13.pdf"
                  target="_blank"
                >
                  Salesforce Certified Administrator Online Course
                </a>{" "}
                ↗
              </div>
              <div id="CertiTitle2">• GeeksforGeeks</div>
            </div>
          </div>

          <div className="fade-up" id="certiCard">
            <div id="CertiImage">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQGHMz_lNGDyHA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1717308252434?e=2147483647&v=beta&t=a8Yk4p9MZaw-ohkNs6z7xt7XJGuv2RZ0ymqza4aAWto"
                alt=""
                srcSet=""
              />
            </div>
            <div id="CertiInfo">
              <div id="CertiTitle">
                <a href="./sap.pdf" target="_blank">
                  Training on Emerging Technologies - Advance Course
                </a>{" "}
                ↗
              </div>
              <div id="CertiTitle2">
                • CodeUnnati - Edunet Foundation [by SAP]
              </div>
            </div>
          </div>

          <div className="fade-up" id="certiCard">
            <div id="CertiImage">
              <img
                src="https://media.licdn.com/dms/image/v2/D5622AQH9OzPwl10dfw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1712578713859?e=2147483647&v=beta&t=Ye-xT1tUYffIAi2kPQlwFSSggQAErgWZuh-QRDC6gyA"
                alt=""
                srcSet=""
              />
            </div>
            <div id="CertiInfo">
              <div id="CertiTitle">
                <a href="csrboxDA.pdf" target="_blank">
                  Summer GTU Internship Program on Data Analytics
                </a>{" "}
                ↗
              </div>
              <div id="CertiTitle2">• CSRBOX [by GTU]</div>
            </div>
          </div>
        </div>

        <div className="fade-up" id="Contact">
          <h5>Contact</h5>

          <div className="fade-up" id="contactCard">
            <div id="contactPhone">
              {" "}
              <a href="tel:+917436020138">📞 +91 7436020138</a>
            </div>
            <div id="contactMail">
              {" "}
              <a href="mailto:patelurvish0706@gmail.com">
                📧 patelurvish0706@gmail.com
              </a>
            </div>
            <div id="contactLinkedIN">
              {" "}
              <a
                href="https://www.linkedin.com/in/patelurvish0706"
                target="_blank"
              >
                🔗 linkedin.com/in/urvishpatel0706
              </a>
            </div>

            <div style={{fontWeight:200,fontSize:'12px',background:'#3d3d3da3',padding:'2px 6px',borderRadius:'5px',color:'#dad4d4'}}>Updated 2 Months ago</div>
          </div>

          <div id="petCat">
            <div id="thankyou">
              <div id="greet">Thank You!!</div>
              <div id="copy">&copy; Portfolio - Urvish Patel 2025-26.</div>
            </div>

            <img id="catie" src="./petcat.gif" alt="petcat" />
          </div>



        </div>
      </div>
    </>
  );
}

export default Content;
