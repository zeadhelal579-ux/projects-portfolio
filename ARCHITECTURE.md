# CROP portfolio architecture

The browser loads `index.html` from the branch root. Page copy, links, and captions are available on the first load.

## Page map

| Section | Anchor |
| --- | --- |
| Forecast pest risk before crop damage. | Opening section |
| You can see a wilted leaf. You can't see the heat that caused it. | #challenge |
| Four steps, one line from a weather reading to a farmer's next move. | #solution |
| Built on thermal biology and a real research dataset — not a hunch. | #science |
| A risk label alone doesn't tell a farmer when to spray. | #transparency |
| From one weather reading to a whole farm's health, in one place. | #product |
| Five screens, from the whole farm down to one recommendation. | #screens |
| A cheaper spray schedule is a business model, not just an environmental one. | #business |
| The stack, chosen for a system that runs unattended every night. | #stack |
| Four disciplines, one deadline. | #team |
| Let's build something. | #contact |

## Styles and assets

`css/base.css` defines the design tokens and typography. `css/layout.css` provides shared layout rules. Each section has a named stylesheet. `css/responsive.css` adapts the layout, and `css/reduced-motion.css` respects system preferences. Visuals are local and Google Fonts has system fallbacks.

## Interactions

`js/navigation.js` toggles the mobile menu, closes it after choosing a section, and returns focus to the button on Escape. `active-section.js` tracks the current section.
