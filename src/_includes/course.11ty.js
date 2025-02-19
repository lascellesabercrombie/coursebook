/**
 * Default layout
 * Has main header with nav at the top
 */

const { html } = require("htm/preact");
const RawContent = require("./components/RawContent");
const { Nav, Section, Link } = require("./components/SidebarNav");

exports.data = {
  layout: "base",
  scripts: ["/assets/js/toggle-button.js"],
};

exports.render = ({ page: { url }, content }) => {
  return html`
  <div class="layout">
    <aside>
      <${Nav}>
        <${Link} url=${url} href="/course/introduction">Introduction</${Link}>
        <${Link} url=${url} href="https://www.foundersandcoders.com/code-of-conduct/" target="_blank" rel="noreferrer">Code of Conduct</${Link}>
        <${Section} title="Handbook" url=${url} subpath="course/handbook">
          <li><${Link} url=${url} href="/course/handbook/system-requirements/">System Requirements</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/installation/">Installation Guide</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/safeguarding/">Safeguarding</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/course-rules/">Course Rules</${Link}></li>
           <li><${Link} url=${url} href="/course/handbook/user-manuals/">User manuals</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/debugging/">Debugging</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/asking-for-help/">Asking for help</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/pair-programming/">Pair programming</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/spikes/">Tech Spikes</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/projects/">Projects</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/github-workflow/">GitHub Workflow</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/project-presentations/">Project Presentations</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/project-team/">Project Roles</${Link}></li>
           <li><${Link} url=${url} href="/course/handbook/role-circles/">Role circles</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/code-review/">Code review</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/retrospectives/">Retrospectives</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/mentor-guidance/">Mentoring guidance</${Link}></li>
          <li><${Link} url=${url} href="/course/handbook/mentor-roles/">What to expect of mentors</${Link}></li>
        </${Section}>
        <${Section} title="Application" url=${url} subpath="course/syllabus/application">
          <li><${Link} url=${url} href="/course/syllabus/application/hobby-page/project">Hobby page</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/application/project-gallery/project">Project gallery</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/application/comment-box/project">Comment box</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/application/movie-data/project">Movie data</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/application/website/project">Website</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/application/feature/project">Feature</${Link}></li>
        </${Section}>
        <${Section} title="Pre-apprenticeship" url=${url} subpath="course/syllabus/pre-apprenticeship">
          <li><${Link} url=${url} href="/course/syllabus/pre-apprenticeship/pre-course/schedule/">Pre-course</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/pre-apprenticeship/markup/schedule/">Markup</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/pre-apprenticeship/http/schedule/">HTTP</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/pre-apprenticeship/testing/schedule/">Testing</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/pre-apprenticeship/projects/schedule/">Projects</${Link}></li>
        </${Section}>
        <${Section} title="Apprenticeship" url=${url} subpath="course/syllabus/apprenticeship">
          <li><${Link} url=${url} href="/course/syllabus/apprenticeship/server/schedule/">Server</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/apprenticeship/database/schedule/">Database</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/apprenticeship/authentication/schedule/">Authentication</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/apprenticeship/server-side-app/schedule/">Server-side app</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/apprenticeship/client-side-app/schedule/">Client-side app</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/apprenticeship/full-stack-app/schedule/">Full-stack app</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/projects/in-house-design/schedule">Design Sprint</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/projects/in-house-build-1/schedule">Build Sprint 1</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/projects/in-house-build-2/schedule">Build Sprint 2</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/projects/TFB-design/schedule">TFB Design Sprint</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/projects/TFB-build-1/schedule">TFB Build Sprint 1</${Link}></li>
          <li><${Link} url=${url} href="/course/syllabus/projects/TFB-build-2/schedule">TFB Build Sprint 2</${Link}></li>
        </${Section}>
      </${Nav}>
    </aside>
    <main id="main">
      <${RawContent} class="flow">${content}</${RawContent}>
    </main>
  </div>
  `;
};
