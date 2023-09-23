document.addEventListener("DOMContentLoaded", function() {

    // Function to show content based on button click
    function showContent(contentType) {
        var container = document.getElementById('contentContainer');
        switch (contentType) {
            case 'bio':
                container.innerHTML = `
            <p>
            Elizabeth is a computer science student at the <a href="https://www.usc.edu/" target="_blank">University of Southern California</a>. She is a member of the <a href="https://anrg.usc.edu/" target="_blank">Autonomous Networks Research Group</a>, with Prof. Bhaskar Krishnamachari as her faculty advisor and mentor. Before joining USC, she worked with IBM Research in Africa, Brave Venture Labs, and iHub Nairobi. She received her Bachelor of Engineering in Electrical and Electronics Engineering from the <a href="https://www.tukenya.ac.ke/" target="_blank">Technical University of Kenya</a>. 
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
                container.innerHTML = "<p>This is the news content...</p>";
                break;
            case 'thoughts':
                container.innerHTML = "<p>This is the news content...</p>";
                break;
            case 'tools':
                container.innerHTML = "<p>This is the news content...</p>";
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
