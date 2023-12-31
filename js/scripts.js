document.addEventListener("DOMContentLoaded", function() {

    // Function to show content based on button click
    function showContent(contentType) {
        var container = document.getElementById('contentContainer');
        switch (contentType) {
            case 'bio':
                container.innerHTML = `
            <p>
             Elizabeth (Leez) is a Ph.D student of Computer Science at the <a href="https://www.usc.edu/" target="_blank">University of Southern California</a>. She is a member of the <a href="https://anrg.usc.edu/" target="_blank">Autonomous Networks Research Group</a>, with <a href="https://ceng.usc.edu/~bkrishna/" target="_blank">Prof Bhaskar Krishnamachari</a>.  as her faculty advisor and mentor.
            My research interests are in reinforcement learning, stochastic modeling, decision science, optimization, robotics, AI tool design and Human-AI interaction
            </p>
<!--            <p>-->
<!--            Throughout her academic journey, Elizabeth has organized and participated in various workshops and boot camps, emphasizing areas like robotics, programming, and embedded systems. She has been involved in numerous communities, holding positions such as a Taskforce Member at the Ministry of Information, Communication, and the Digital Economy in Kenya, an Artifact Evaluation Committee Member for SuperComputing 2021, and an Artifact Evaluation Board member for the Journal of Systems Research. Within the University of Southern California, she undertakes the role of Director of Civic Engagement for the Black Graduate Student Network and an  Organizing Committee member for the Ph.D. Women and Gender Minorities Computing Club. She is passionate about STEAM and education mentorship for the next generation, fostering knowledge and enthusiasm among individuals at any level.-->
<!--            </p>-->
<p>
 Prior to starting her Ph.D. journey at USC, Elizabeth worked as a <strong>Software Engineer</strong> at IBM Research, <strong> Head of Product Development</strong> at Brave Venture Labs, and <strong> Co-lead of Hardware Research </strong> at iHub Nairobi. Her foundational academic background is a Bachelor of Engineering in Electrical and Electronics Engineering, which she obtained from the Technical University of Kenya. In her personal time, Elizabeth finds solace in music, spoken word, poetry, fine arts, and mural photography, and journaling. She also appreciates the serenity of outdoor activities.

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



