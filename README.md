## Milestone1

#### Feedback
Great job on Milestone1. Purpose, audience, and Goal are well laid out. Your PWP will easily fall into the scope of the class. Persona accurately lays out just who will be using your site, and how he would be using your site. I think the simple easy to use site you laid out in the use case will make a great PWP.

#### corrections
There is only one issue with Milestone1 is that you pushed a .idea directory to GitHub. Second, make sure to close all of your HTML tags. Lastly, while the layout for the site using HTML looks awesome I would like to see you start using a little more CSS for the layout of future projects. Also you have a .idea directory in the repository. That needs to be removed asap come let me know if you need help and I would check your .gitignore 

#### Grade Tier III https://bootcamp-coders.cnm.edu/projects/personal/rubric/ feel free to work on Milestone2

## Milestone 2α

#### Feedback
The formatting for milestone 2α was wrong. You should have had the wireframes in the page that you provided your content strategy. That being said, Your content as a whole was well thought out and I got a clear understanding of what you wanted to accomplish, and your goals should be very obtainable. I recommend that adding your logo to the nav-bar. Unless you have a very large logo having that much white space at the top would detract from the overall feel of the website. The about me section and Image section should be very easy to add and shouldn't take up to much time. Do you plan on using a third party tool to display your portfolio? If so I recommend that you use fancy-box from fancyapps.com. The plugin in is very easy to use and past alumni have had great results with using it. I am a little worried about how your personal website is going to look in mobile view. I love the Idea of adding a right justified photo next to the about me/ portfolio section but I am afraid that the photo might mess with the responsiveness of the site. I recommend writing a media query that hides the photo at certain screen size or moving it somewhere where the photo can stand out, and not distract attention away from the portfolio. That being said feel free to begin working on milestone 2β.

#### grade Tier II

### Milstone 2b
Tier II. Feedback left via Slack.

## Milestone 3 / Final PWP Evaluation
It's so pretty! Nice work on your design! You've made remarkable progress in your Front End skills over the course of the last 9 weeks. Continue to practice the basics of building Front End - it's fundamental to web development and it just gets more fun (and complex!) from here.

I know you've had persistent problems with your hardware - and that can most definitely have a huge negative impact on a project. These issues can be ironed out - but it may be something that is really wrong with your computer or OS itself.

The biggest issue I see with your project right now is that the contact form isn't working. I think I see the root of the issue! In your **form-validate.js** file, the id's on lines 5 and 53 don't line up with the id on your &lt;form&gt; tag. This is an easy fix. I also see that you have no **composer.json** file to install Swiftmailer and reCAPTCHA - you definitely need this too. Try these fixes and get back to me if you still have issues. Let's get it fixed before demo day.

There are a few adjustments that can be made to the Bootstrap grid to polish up the layout a bit. See **Edits &amp; Suggestions** below for details on technical issues and fixes.

All in all, nice work on putting together thoughful content and a visually engaging design. You've throughly challenged yourself with this project, and I hope this has been a valuable learning experience for you.  

Your Milestone 3/Final Delivery for PWP passes at [Tier II](https://bootcamp-coders.cnm.edu/projects/personal/rubric/).

Your overall passing grade across all of your PWP Milestones is Tier II [22/40 points (55%)](https://bootcamp-coders.cnm.edu/projects/personal/rubric/#sample-score).

- Milestone 1 - 20%: Tier III 30(0.2) = 6
- Milestone 2a - 20%: Tier II 20(0.2) = 4
- Milestone 2b - 10%: Tier II 20(0.1) = 2
- Milestone 3 - 50%: Tier II 20(0.5) = 10

### Edits &amp; Suggestions
- :scream_cat: The pesky `/.idea` directory made it's way to GitHub! Not sure how this happened, because your `.gitignore` looks fine. I suspect this is due to other persistent issues you were having with PhpStorm on your laptop. Before each commit/push, pay close attention to the PhpStorm window, and which files are checked. Be sure to uncheck any files that should not be included in the commit/push. And if PhpStorm gives you a notification to add any configuration files to git, select no.
- I don't see a **composer.json** file in the root of your project. You'll need this to install Swiftmailer and reCAPTCHA for your contact form to work properly on the back end.
- Lines 5 and 53 in your **form-validate.js** file need to be updated to match the id on your &lt;form&gt; tag. This also needs to be fixed for your contact form.
- Remove all the `xmlns` (XML Namespaces) from your &lt;html&gt; tag - these are not correct for HTML5.
- There are some HTML/Bootstrap grid issues that are preventing the mobile view from looking right. The root of some of the layout issues are in the contact section. Instead of heavy-handed CSS rules to center that form, I'd use the Bootstrap grid structure and classes. Putting your form in the correct Bootstrap structure should fix that scrollbar across the bottom of the screen, and it will help the form look nicer on mobile.
- Since your text size in the About section is larger now, I think having that section full width on mobile would be cleaner. I can help you align and size the photo in the right spot too... that can be tricky using the Bootstrap column push/pull.
- I would open your resume in a new tab by putting the `target="_blank"` attribute on that link.
- I would remove the portfolio section until you have some content to put in there.
