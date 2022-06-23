$("#career-dev").click(function () {
  $("#content-title").html("Career Development");
  $("#content").html("<p>The Career Development directorship aims to enhance skills in their career path by guiding them through various events, such as the Professional Networking Dinner, etiquette lunch, and industry panels. They also connect SWE to corporations and build strong relationships between the students and companies. Career Development's goal is to shape SWE members and guide them in finding for a career.</p>");
});

$("#conference").click(function () {
  $("#content-title").html("Conference");
  $("#content").html("<p>The Conference Directorship is responsible for the planning, registration, and coordination of all logistics related to the SWE National Conference and any regional conferences that Cornell SWE may attend. This includes booking hotels, booking airfare, booking ground transportation from airports to various locations, and ensuring all members are registered correctly for the conference.</p><p>This directorship has two directors who have typically been on SWE E-board for at least a year, unless in special circumstances in which a SWE Chair has been to conference(s). The Conference directorship works closely with Finance and the rest of the executive board to make the travel process as smooth as possible and to ensure that every attendee at a conference has a fulfilling experience in professional development and learning about how to improve the Cornell section of SWE.</p>");
});

$("#communications").click(function () {
  $("#content-title").html("Communications");
  $("#content").html("<p>The Communications directorship seeks to spread SWE's name on the campus by publicizing events through various means, such as postering, sending electronic mailings weekly to inform members of future events, designing and maintaining the website, etc. The goal is to keep students informed on upcoming SWE activities and opportunities through SWE. </p><p>The Communications directorship also includes Faculty Relations and Alumni Relations. The Faculty Relations branch connects students and faculty through various social events, allowing SWE members to network and get to know their professors. Faculty Relations hosts the Faculty Student Dinner, a dinner where students have the opportunity to meet engineering career services and faculty from every engineering discipline. Alumni Relations connects Cornell SWE alumni with current members through various programs and events. </p><p>We also create and distribute the annual SWE Magazine, which highlights SWE members and events, as well as Cornell professors.The SWE Magazine is a way to celebrate all that SWE has accomplished every year, and the hard work our members have put in to support women in engineering.</p>")
});

$("#corporate-relations").click(function () {
  $("#content-title").html("Corporate Relations");
  $("#content").html("<p>The Corporate Relations directorship organizes all the information session hosted by SWE for the students in the College of Engineering. <br/><br/> The goals of information sessions are to: </p > ");
  $("#content").append($('<ul>').append($('<li>').text('Provide students with opportunities to meet company representatives in an informal setting')));
  $("#content ul").append(($('<li>').text('Assist students in learning about the company to ease both the interviewing and job decision making process')));
  $("#content").append("For companies, goals are to: ")
  $("#content").append($('<ul id="goals">'))
  $("#goals").append($('<li>').text('Enhance company visibility on campus'))
  $("#goals").append($('<li>').text('Provide companies with an opportunity to present their merits with an impressive presentation'))
  $("#goals").append($('<li>').text('Give the recruiters more time to acquaint themselves with prospective employees'))


});

$("#finance").click(function () {
  $("#content-title").html("Finance");
  $("#content").html(" <p>The Finance directorship is in charge of all the financing within SWE. This includes all the money transactions from SWE events, ranging from information sessions, national and regional conferences, outreach/community service events, and many others.</p><p> The Finance Directorship works closely with Diversity Programs in Engineering at Cornell and the Cornell Finance Department to ensure swift transactions.We strive to provide easy payments and billing, and work to ensure that your financial experience with the Society of Women Engineers is smooth and rewarding.</p> <p>For more information about scheduling an information session with us, please refer to the following </p> <p>For more information about joining us for the Professional Networking Dinner, please refer to the following </p> ");
  let tag = document.createElement("a");
  tag.href = "infosession.html"
  tag.innerHTML = "link."
  const p = $("#content p")
  p[2].append(tag)
  tag = document.createElement("a");
  tag.href = "pnd.html"
  tag.innerHTML = "link."
  console.log(tag)
  p[3].append(tag)
})

$("#fundraising").click(function () {
  $("#content-title").html("Fundraising");
  $("#content").html("The Fundraising Directorship is responsible for raising money to send our members to the annual SWE National Conference and to help support the many other events on campus that our organization hosts. This directorship focuses primarily on obtaining sponsorships from various companies by putting together a fundraising proposal to distribute to corporate contacts. Additionally, we host smaller events throughout the year such as Chipotle fundraisers to involve the entire Cornell community in support and awareness of our section.")
});

$("#student-services").click(function () {
  $("#content-title").html("Student Services");
  $("#content").html("<p>SWE Student Services works to build a strong SWE community to provide members with necessary resources to succeed during their time at Cornell. We organize monthly general body meetings during which members network with one another and are informed of upcoming SWE and general on-campus events. Furthermore, we look to grow membership by tabling at ClubFest and hosting a Welcome Picnic early in the fall semester.</p>	<p>Our internal mentorship program matches underclassmen to upperclassmen with similar interests and major course of study. This allows for upperclassmen to share their experiences and provide advice to help facilitate their mentees’ transition to college while fostering interconnectivity.</p><p>Social events throughout the year include Halloween-themed apple cider and leaf painting, movie outings, cookie decorating, and an annual Escape Room charity fundraiser.</p>")
});

$("#outreach").click(function () {
  $("#content-title").html("Outreach");
  $("#content").html("");
  $("#content").append("<p>SWE Outreach strives to bring STEM education and awareness to individuals of all ages throughout Cornell and the greater Ithaca community. By partnering with groups within the community, we hope to influence a diverse audience of young people, parents, teachers, and mentors to pique and sustain their interest in STEM. On campus, we strive to attain a college-wide awareness of the challenges underrepresented minorities face in STEM, taking steps toward racial and gender parity by leveraging connections with other Diversity Programs in Engineering.</p><p>  In the past we have partnered with Girl Scouts of NYPENN, Ithaca High School Code Red Robotics, Tompkins County Public Library, Junior FLL, SWE NEXT clubs, and many others. We are always looking for more partnership opportunities!</p><p>  We are also involved with the recruitment of incoming women engineers to the College of Engineering at Cornell. Every year we run Women in Engineering Day for accepted students. The goal of this program is to expose admitted women to the opportunities at Cornell and the influence and strength of our section of SWE.</p><p>  For general inquiries or any other questions, please email ");
  let tag = document.createElement("a");
  tag.href = "mailto:outreach.cornellswe@gmail.com"
  tag.innerHTML = "outreach.cornellswe@gmail.com"
  const p = $("#content p")
  p[3].append(tag)
})

