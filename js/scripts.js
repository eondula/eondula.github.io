document.addEventListener("DOMContentLoaded", function() {

    // Function to show content based on button click
    function showContent(contentType) {
        var container = document.getElementById('contentContainer');
        switch (contentType) {
            case 'bio':
                container.innerHTML = `    
             
            <p>
             I am a Ph.D Candidate at the <a href="https://www.usc.edu/" target="_blank">University of Southern California</a> and a member of the <a href="https://anrg.usc.edu/" target="_blank">Autonomous Networks Research Group</a>, and advised by <a href="https://ceng.usc.edu/~bkrishna/" target="_blank">Prof Bhaskar Krishnamachari</a>.
            My research investigates how AI models can effectively navigate trade-offs in decision optimization within complex dynamic environments. I address this fundamental challenge through two key areas: reinforcement learning for epidemic control and language-based multi-agent systems for decision-making.</a>
            </p>

            `;
                break;

            case 'news':
                container.innerHTML = `
                <div class="timeline">
                    <div class="timeline-item">
                        <span class="date">12/2023</span>
                        <p>Pre-print out for work on <em>Reinforcement Learning for Safe Occupancy Strategies in Educational Spaces during an Epidemic</em>  available on <a href="https://arxiv.org/abs/2312.15163" target="_blank">Arxiv</a> </p>
                    </div>
                      <div class="timeline-item">
                        <span class="date">10/2023</span>
                        <p>Research work on <em>Sentimental Agents: Combining Sentiment Analysis and Non-Bayesian Updating for Cooperative Decision-making</em>  accepted at <a href="https://www.aamas2024-conference.auckland.ac.nz/" target="_blank">23rd International Conference on Autonomous Agents and Multi-Agent Systems</a> (AAMAS-24)</p>
                    </div>
                
                    <div class="timeline-item">
                        <span class="date">11/2023</span>
                        <p>Interviewed during FOCUS FRIDAYS on <em>Power Differentials in Engineering in Academia: Existence, Impact, Awareness, and Mitigation</em> <a href="https://diversity.asee.org/">ASEE Diversity & Inclusion Initiatives</a></p>
                    </div>
          
                    <div class="timeline-item">
                        <span class="date">11/2023</span>
                        <p>Invited Panelist for Women of Color in STEM at Mt. San Antonio College</p>
                    </div>
                     <div class="timeline-item">
                        <span class="date">10/2023</span>
                        <p>Research proposal on <em>Navigating Uncertainty in Epidemic Contexts</em>  accepted at <a href="https://ojs.aaai.org/index.php/AAAI/article/download/21649/21398" target="_blank">Association for the Advancement of Artificial Intelligence Doctoral Consortium</a> (AAAI-24)</p>
                    </div>
                    <div class="timeline-item">
                        <span class="date">05/2023</span>
                        <p>STEM Bytes Talk: "Using Reinforcement Learning to Operate a Campus Safely During a Pandemic"</p>
                    </div>
                    <div class="timeline-item">
                        <span class="date">10/2021</span>
                        <p>Abstract paper accepted at <a href="https://ojs.aaai.org/index.php/AAAI/article/download/21649/21398" target="_blank">Association for the Advancement of Artificial Intelligence</a> (AAAI-22)</p>
                    </div>
                    <div class="timeline-item">
                        <span class="date">05/2021</span>
                        <p>A feature on going from intern, to IBMer to PhD. <a href="https://ibm-research.medium.com/from-interns-to-ibmers-to-phds-a-unique-approach-to-talent-in-africa-abfb071cb90f" target="_blank">Read more</a></p>
                    </div>
                    <div class="timeline-item">
                        <span class="date">08/2020</span>
                        <p>I joined the <a href="https://anrg.usc.edu/www/"></a> Autonomous Networks Research Group</p>
                    </div>
                    <div class="timeline-item">
                        <span class="date">11/2018</span>
                        <p>Guest contributor, African Leadership University where I shared my work on Applications of IoT in Emerging Markets.</p>
                    </div>
                    <div class="timeline-item">
                        <span class="date">09/2018</span>
                        <p>Recognized as an Outstanding Alumni <a href="https://tukenya.ac.ke/sites/default/files/downloads/tunewsdec2018.pdf" target="_blank">Details</a></p>
                    </div>
                    <div class="timeline-item">
                        <span class="date">08/2018</span>
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



