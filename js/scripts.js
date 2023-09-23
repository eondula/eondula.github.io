document.addEventListener("DOMContentLoaded", function() {

    // Function to show content based on button click
    function showContent(contentType) {
        var container = document.getElementById('contentContainer');
        switch (contentType) {
            case 'bio':
                container.innerHTML = `
            <p>
            Elizabeth is a student of computer science at the <a href="https://www.usc.edu/" target="_blank">University of Southern California</a>. She is a member of the <a href="https://anrg.usc.edu/" target="_blank">Autonomous Networks Research Group</a>, with Prof. Bhaskar Krishnamachari as her faculty advisor and mentor. Before joining USC, she worked with IBM Research in Africa, Brave Venture Labs, and iHub Nairobi. She received her Bachelor of Engineering in Electrical and Electronics Engineering from the <a href="https://www.tukenya.ac.ke/" target="_blank">Technical University of Kenya</a>. 
            </p>

            <p>
            Throughout her journey, she has facilitated various workshops and boot camps, focusing on areas such as robotics, programming, and embedded systems. Her roles in different communities have been diverse, from being a Taskforce Member at the Ministry of ICT, Innovation, and Youth Affairs in Kenya, an Artifact Evaluation Committee Member for SuperComputing 2021, and an Artifact Evaluation Board member. At USC, she serves as the Director of Civic Engagement for the Black Graduate Student Network and is an Organizing Committee member of the Ph.D. Women and Gender Minorities Computing Club. She has also mentored in various capacities, including at the Viterbi Summer Institute, the Women in Engineering program, the Viterbi Mentorship Program (at USC), IBM Bluehack, Tech Avenue at TUK, Foondi Workshops, and Women Who Mentor and Innovate in Africa (now Women in Tech KE).
            </p>

            <p>
            She has been recognized with several awards, including the Grace Hopper Celebration Travel Grant, OSDI ’18 Diversity Grant, and Annenberg Fellowship, and was acknowledged as the Outstanding Alumni Class of 2014 at the Technical University of Kenya.
            </p>

            <p>
            Elizabeth's research is in reinforcement learning, specifically its application to scenarios for optimizing decision-making strategies under uncertainties. Her current work integrates stochastic epidemic modeling with reinforcement learning, addressing complexities in educational settings during epidemics. Apart from reinforcement learning, she delves into intelligent autonomy, human-AI interaction, multi-agent systems, and AI tool design and development.
            </p>

            <p>
            Beyond academic and professional pursuits, she is loves live music, spoken word, poetry, photography, and outdoor activities.
            </p>
            `;
                break;

            case 'news':
                container.innerHTML = `
                <div class="timeline">
                    <div class="timeline-item">
                        <span class="date">Nov 2023</span>
                        <p>Invited Panelist for Women of Color in STEM at Mt. San Antonio College</p>
                    </div>
                    <div class="timeline-item">
                        <span class="date">May 2023</span>
                        <p>STEM Bytes Talk</p>
                    </div>
                    <div class="timeline-item">
                        <span class="date">Oct 2021</span>
                        <p>Abstract paper accepted at <a href="https://ojs.aaai.org/index.php/AAAI/article/download/21649/21398" target="_blank">Association for the advancement of Artificial Intelligence</a></p>
                    </div>
                    <div class="timeline-item">
                        <span class="date">May 2021</span>
                        <p>A feature on going from intern, to IBMer to PhD. <a href="https://ibm-research.medium.com/from-interns-to-ibmers-to-phds-a-unique-approach-to-talent-in-africa-abfb071cb90f" target="_blank">Read more</a></p>
                    </div>
                    <div class="timeline-item">
                        <span class="date">Aug 2020</span>
                        <p>I joined the Autonomous Networks Research Group</p>
                    </div>
                    <div class="timeline-item">
                        <span class="date">Nov 2018</span>
                        <p>Guest contributor, African Leadership University where I shared my work on Applications of IoT in Emerging Markets.</p>
                    </div>
                    <div class="timeline-item">
                        <span class="date">Sep 2018</span>
                        <p>Recognized as an Outstanding Alumni <a href="https://tukenya.ac.ke/sites/default/files/downloads/tunewsdec2018.pdf" target="_blank">Details</a></p>
                    </div>
                    <div class="timeline-item">
                        <span class="date">Aug 2018</span>
                        <p>Moved to Los Angeles, CA to start my Ph.D journey in Computer Science at University of Southern California. I received the Annenberg Fellowship.</p>
                    </div>
                </div>
            `;
                break;
            case 'thoughts':
                container.innerHTML = document.getElementById('thoughts-list').innerHTML;
                break;

            case 'tools':
                container.innerHTML = "<h>Check out github (personal and ANRG)</h>";
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

    document.getElementById("projBtn").addEventListener("click", function() {
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



