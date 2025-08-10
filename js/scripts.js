document.addEventListener("DOMContentLoaded", function() {

    // Function to show content based on button click
    function showContent(contentType) {
        var container = document.getElementById('contentContainer');
        switch (contentType) {
            case 'bio':
                container.innerHTML = `    
             
            <p>
    I am an Assistant Professor of Computer Science at 
    <a href="https://www.winthrop.edu/" target="_blank">Winthrop University</a>. 
    I graduated with a Ph.D. in Computer Science from the University of Southern California, 
    where I was a member of the 
    <a href="https://anrg.usc.edu/" target="_blank">Autonomous Networks Research Group</a> 
    advised by Prof. Bhaskar Krishnamachari</a>.
    </p>
    <p>
    My research focuses on developing methodologies for evaluating and designing artificial intelligence systems that operate under uncertainty. 
    I study how external factors such as stochastic environmental conditions and internal factors such as model variability shape AI decision-making, and I design evaluation frameworks that capture these complex, domain-specific effects. 
    By integrating reinforcement learning, decision theory, and control-theoretic perspectives, my work examines how algorithmic choices, coordination structures, and information patterns influence emergent behaviors, and develops approaches for deploying AI in high-stakes physical and social environments that are reliable, safe, and interpretable.
</p>

</p>   

<p>
    My teaching emphasis lies in software engineering principles and applied computing. 
    This Fall 2025, I am co-teaching 
    <strong><a href="https://ssb.winthrop.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202480&crse_numb_in=475&subj_code_in=CSCI" target="_blank">CSCI 475: Software Engineering I</a></strong>, which covers structured systems analysis, requirements specification, data-flow diagrams, and object-oriented analysis; and 
    <strong><a href="https://ssb.winthrop.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202480&crse_numb_in=245&subj_code_in=CSCI" target="_blank">CSCI 245: Front End Web Development</a></strong>, which focuses on responsive layouts, UI design, and modern web frameworks. 
    Additionally, I am designing and instructing 
    <strong>CSCI/DIFD 141: Introduction to Web Application Design</strong>, where students will learn fundamental web app structures and deployment processes.
</p>


            `;
                break;

            case 'teaching':
                container.innerHTML = `
        <div class="timeline">
            <div class="timeline-item">
                <span class="date">Fall 2025</span>
                <p>
                    <strong><a href="https://ssb.winthrop.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202480&crse_numb_in=475&subj_code_in=CSCI" target="_blank">
                    CSCI 475: Software Engineering I</a></strong> — Co-teaching the course, covering structured systems analysis, requirements specification, object-oriented design, and collaborative software development practices.
                </p>
            </div>
            <div class="timeline-item">
                <span class="date">Fall 2025</span>
                <p>
                    <strong><a href="https://ssb.winthrop.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202480&crse_numb_in=141&subj_code_in=CSCI" target="_blank">
                    CSCI/DIFD 141: Introduction to Web Application Design</a></strong> — Co-teaching the course, introducing fundamental concepts in web application structures, interface design, and deployment processes.
                </p>
            </div>
            <div class="timeline-item">
                <span class="date">Fall 2025</span>
                <p>
                    <strong><a href="https://ssb.winthrop.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202480&crse_numb_in=245&subj_code_in=CSCI" target="_blank">
                    WEBD 245: Front End Web Development</a></strong> — Designing and teaching the course, focusing on responsive layouts, user experience, and modern front-end frameworks.
                </p>
            </div>
        </div>
    `;
                break;

            case 'thoughts':
                container.innerHTML = document.getElementById('thoughts-list').innerHTML;
                break;

            case 'tools':
                container.innerHTML = document.getElementById('tools-list').innerHTML;
                break;
            default:
                container.innerHTML = "<p>Select a content type.</p>";
        }
    }
    // Load the bio content by default
    showContent('bio')

    // Add event listeners for the buttons
    document.getElementById("bioBtn").addEventListener("click", function() {
        showContent('bio');
    });

    document.getElementById("newsBtn").addEventListener("click", function() {
        showContent('news');
    });

    document.getElementById("thoughtsBtn").addEventListener("click", function() {
        showContent('thoughts');
    });

    document.getElementById("toolsBtn").addEventListener("click", function() {
        showContent('tools');
    });


});

function shareToTwitter() {
    const title = document.getElementById('modalTitle').innerText;
    const description = document.getElementById('modalDescription').innerText;
    const truncatedDescription = description.split(" ").slice(0, 50).join(" ");
    const contentToShare = `${title} - ${truncatedDescription}... Read More: [https://eondula.github.io/#]`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(contentToShare)}`;
    window.open(url, '_blank');
}



