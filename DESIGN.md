---
name: Zweiradmeisterei
description: Fired-enamel stop case for a Köln bicycle workshop.
colors:
  enamel: "oklch(0.42 0.16 255)"
  enamel-deep: "oklch(0.32 0.14 255)"
  signal: "oklch(0.74 0.155 58)"
  signal-ink: "oklch(0.26 0.05 55)"
  stucco: "oklch(0.955 0.012 85)"
  porcelain: "oklch(0.975 0.008 90)"
  ink: "oklch(0.24 0.04 258)"
  ink-soft: "oklch(0.4 0.045 258)"
  border: "oklch(0.42 0.16 255 / 22%)"
  input: "oklch(0.42 0.16 255 / 32%)"
typography:
  display:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "clamp(2.35rem, 5vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "clamp(2.2rem, 4vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Schibsted Grotesk, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  none: "0"
  sm: "0.12rem"
spacing:
  row: "1.25rem"
  gutter: "1rem"
  gutter-wide: "1.5rem"
  board: "1.25rem"
  board-wide: "2.5rem"
  section: "5rem"
  section-wide: "7rem"
components:
  button-signal:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.sm}"
    padding: "0 1.25rem"
    height: "3rem"
  button-signal-hover:
    backgroundColor: "oklch(0.74 0.155 58 / 90%)"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.sm}"
    padding: "0 1.25rem"
    height: "3rem"
  button-enamel:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "3rem"
  button-call:
    backgroundColor: "transparent"
    textColor: "{colors.porcelain}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "3rem"
  input-request:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "3rem"
  input-field:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 0.75rem"
    height: "3rem"
  nav-bar:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.porcelain}"
    typography: "{typography.label}"
    height: "4rem"
  house-number:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.enamel}"
    rounded: "{rounded.none}"
    width: "2.75rem"
    height: "2.75rem"
  service-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "1.25rem 0"
  service-row-hover:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.ink}"
    padding: "1.25rem 0"
---

# Design System: Zweiradmeisterei

## Overview

**Creative North Star: "The Stop Case"**

The Stop Case treats the workshop site as a tram-stop board on Luxemburger Straße. The ground is daylight stucco. The offer sits in a fired-enamel case. Type on that case is porcelain. One signal-orange cell is the repair request. Density follows a timetable: flush-left type, hairline rules, and a house number locked to the bar.

Enamel is a saturated fired blue, used as a material for the bar, the hero case, the Meister band, and the route action. Porcelain is the light face of the same object: type on enamel, the request field, the hours panel, and the 265 cell. Stucco is the street between those bands. Signal orange stays rare so the next action is obvious. Depth comes from changing material. A single soft shadow belongs to the hero case.

Schibsted Grotesk is the only typeface, from the wordmark through the timetable. Display sizes track tight. Phone numbers and hours use tabular figures. The request control carries one sheen, played once, and that sheen is removed when the visitor prefers reduced motion. Focus is a signal outline sitting just outside the control.

**Key Characteristics:**
- Daylight stucco ground with a fired-enamel case
- One signal-orange request control
- Schibsted Grotesk, flush left, tight display tracking
- Hairline rules and square panels
- House number 265 locked to the bar
- Tabular phone numbers and hours
- One soft shadow, under the hero case only

## Colors

The palette is a fired blue case on warm daylight neutrals, with one orange live cell.

### Primary
- **Fired Enamel** (oklch(0.42 0.16 255)): The case, the sticky bar, the Meister band, and solid secondary actions such as the route control. Selection uses enamel with porcelain type. The text caret is enamel.
- **Enamel Deep** (oklch(0.32 0.14 255)): The footer, and the alert text on the porcelain request form.

### Secondary
- **Signal Orange** (oklch(0.74 0.155 58)): The request control, „Reparatur anfragen“. Also the focus outline. Hover is the same orange at 90% opacity.
- **Signal Ink** (oklch(0.26 0.05 55)): Type on the signal control. Warm and dark enough to hold on the orange.

### Neutral
- **Daylight Stucco** (oklch(0.955 0.012 85)): The page ground. Warm, slightly yellow, the street the case sits on.
- **Porcelain** (oklch(0.975 0.008 90)): Type and chips on enamel, the request field, the hours panel, and the 265 cell.
- **Workshop Ink** (oklch(0.24 0.04 258)): Text on stucco and porcelain.
- **Soft Ink** (oklch(0.4 0.045 258)): Supporting copy and field placeholders.
- **Enamel Hairline** (oklch(0.42 0.16 255 / 22%)): The default border. Lists on light ground use enamel at 20%; fields use enamel at 25%.
- **Field Line** (oklch(0.42 0.16 255 / 32%)): The input token. Drawn fields on porcelain use a slightly firmer enamel edge than the list rules.

### Named Rules
**The Fired Blue Rule.** Enamel stays the fired blue oklch(0.42 0.16 255), at full chroma, for the case, the bar, and the Meister band.

**The One Live Cell Rule.** At rest, signal orange is the request control and nothing else. Links, bands, and secondary actions use enamel, porcelain, or ink.

**The Alias Rule.** The stylesheet's primary alias points at signal, and its secondary alias points at enamel. Specify the named tokens enamel, signal, stucco, porcelain, and ink.

## Typography

**Display Font:** Schibsted Grotesk (sans-serif)
**Body Font:** Schibsted Grotesk (sans-serif)
**Label Font:** Schibsted Grotesk (sans-serif)

**Character:** One grotesque for the sign and the timetable. The loaded cuts are 500, 600, 700, and 800. Display is extrabold and tightly tracked; the timetable is semibold and tabular.

### Hierarchy
- **Display** (800, clamp(2.35rem, 5vw, 4.6rem), line-height 1.02, tracking −0.03em): The hero title on the enamel board. Measure stays near 16ch. Line breaks may balance; the block stays flush left.
- **Headline** (800, clamp(2.2rem, 4vw, 3.75rem), line-height 1.05, tracking −0.03em): Section titles. Document pages (Impressum, Datenschutz, the missing page) use a fixed 2.25rem extrabold title at the same tracking.
- **Title** (700, 1.25rem, line-height 1.3, tracking −0.03em): Names in a service row. The request-form heading and legal subheads step up to 1.5rem extrabold. The motto line is 1.5rem stepping to 1.875rem, weight 600.
- **Body** (500, 1rem, line-height 1.625): Running copy. Section ledes step to 1.125rem and hold a measure of about 62–68ch. Hero support copy uses the same range, up to 1.125rem from the md breakpoint.
- **Label** (600, 0.875rem, line-height 1.4): Bar links, field labels, the service-row action, footer meta. The wordmark is extrabold at 0.9375rem, stepping to 1.125rem, tracked at −0.03em. Controls (the request button, the call button, the route button) are 1rem and weight 600.

### Named Rules
**The One Face Rule.** Schibsted Grotesk carries the wordmark, display, body, labels, and figures. Load weights 500, 600, 700, and 800.

**The Tight Tracking Rule.** Display, headlines, the wordmark, and row titles track at −0.03em. Body and labels keep normal tracking.

**The Tabular Axis Rule.** Hours, the phone number, and timetable figures use tabular numbers.

## Layout

The page is a single column of full-bleed bands inside a 1440px container. Marketing gutters are 1rem, widening to 1.5rem from the md breakpoint (48rem). The hero case sits in a tighter stucco inset, 0.75rem widening to 1rem, and fills the remaining viewport under the bar: `min-height: calc(100svh - var(--nav-h) - 1rem)`.

The bar height token is 6.25rem, then 4rem from 64rem, where the street and phone join the top row and the second strip drops away. Section bands use 5rem of vertical padding, 7rem from md. In-page anchors set a 5rem scroll margin. From 64rem, the Meister, hours, and map bands split into two columns. The hours panel is a porcelain sheet with 1.25rem of padding, 2.5rem from md. Document pages narrow to about 70ch.

Everything is flush left. The timetable is the exception that aligns times to the right edge of the row.

### Named Rules
**The Flush Left Rule.** Headlines and body sit flush left. Long titles may balance their line breaks; they stay left-aligned.

**The 265 Rule.** The house number sits in a square porcelain cell, enamel type, at the right edge of the bar on every width.

## Elevation & Depth

Depth is a change of material. Stucco is the ground, porcelain is a sheet laid on it, enamel is a fired band, and enamel-deep is the foot of the page. Shadows are otherwise absent. The hero case is the one lifted object, and only while it rests on the stucco.

### Shadow Vocabulary
- **Case** (`box-shadow: 0 22px 48px -16px oklch(0.23 0.04 258 / 0.38)`): The hero case only. Soft, ink-tinted, no hard offset.

### Named Rules
**The Case Shadow Rule.** Surfaces are flat and change material. The hero case is the only element with a shadow: 0 22px 48px -16px oklch(0.23 0.04 258 / 0.38).

## Shapes

The case, the hours panel, fields, the map, photographs, and the 265 cell are square. The base radius token is 0.2rem, and the signal control is the only place it appears, reduced to 0.12rem (`rounded-sm`). Rules are 1px. On light surfaces they are enamel at 20% (lists, timetable) or 25% (fields). On enamel they are porcelain at 20% (bar divider), 25% (board footer, fact list), 30% (figure frame), or 35% (the call control). Text links underline in enamel at 30%, with a 4px offset.

### Named Rules
**The Square Case Rule.** The case, panels, fields, the map, and the 265 cell are square. The signal control is the only radius, at 0.12rem.

**The Hairline Rule.** Lists, the timetable, and panel edges use a 1px rule: enamel at about 20–25% on light surfaces, porcelain at about 20–35% on enamel.

## Components

Controls are 3rem tall, set in Schibsted Grotesk at 1rem and weight 600. Focus, everywhere, is a 2px signal outline 3px outside the element.

### Buttons
- **Shape:** Signal is barely curved (0.12rem). Enamel and call controls are square (0).
- **Signal:** Orange ground, signal-ink type, horizontal padding 1.25rem on the form and 1rem when it shares the hero row. Hover drops the orange to 90% opacity. Press shifts the control down 1px. A porcelain band at 45% opacity crosses it once (0.7s, cubic-bezier(0.16, 1, 0.3, 1), delay 0.25s) and does not run when reduced motion is requested.
- **Enamel:** Fired-enamel ground, porcelain type, horizontal padding 1.25rem, square. Used for the route action and the return link on the missing page. No separate hover fill.
- **Call:** Square, transparent, 1px porcelain border at 35%, porcelain type, horizontal padding 1rem. It sits beside the signal control on the enamel board.

### Cards / Containers
- **Case:** Enamel, square, full container width, the case shadow, photograph above and the board below. Board padding is 1.25rem, widening to 2.5rem horizontal and 1.5rem vertical from md.
- **Hours panel:** Porcelain sheet, 1px enamel hairline at 20%, square, the same board padding. The timetable is a hairline table: day at the left, time at the right in tabular figures.
- **Meister band:** Full-bleed enamel, porcelain type, fact rows split by porcelain hairlines at 25%.

### Inputs / Fields
- **Request field:** Porcelain fill, ink type, soft-ink placeholder, square, 3rem tall, 1rem horizontal padding, no border. It sits on the enamel board.
- **Form field:** Porcelain fill, 1px enamel border at 25%, square, 3rem tall, 0.75rem horizontal padding. The concern is a textarea with the same edge and 0.75rem of padding. Labels are 0.875rem, weight 600, 0.5rem above the field.
- **Focus:** 2px signal outline, 3px offset. The caret is enamel.
- **Error:** On the enamel board, the message is signal orange. On the porcelain form, the message is enamel-deep.

### Navigation
The bar is sticky enamel with porcelain type. The wordmark is extrabold and tight. Section links are 0.875rem, weight 600, porcelain at 90%, full porcelain on hover. From 64rem the phone sits in the bar in tabular figures, with the street name beside it. Below 64rem the street and phone occupy a second strip under a porcelain hairline at 20%, and the sections open as a stacked list at 1.125rem. The 265 cell is always the rightmost item: 2.75rem square, porcelain, enamel type, extrabold, tracking −0.03em.

### Service Row
A hairline list. Each row is a link: the name at 1.25rem extrabold-adjacent bold (700) and −0.03em, the detail in soft ink, and the action „Anfragen“ in enamel at 0.875rem, weight 600. Padding is 1.25rem vertical, 1.5rem from md. Hover fills the row with porcelain. From the sm breakpoint the row is three columns, name at 16rem, action aligned to the right.

### Links
Inline contact and legal links are weight 600 with an enamel underline at 30% and a 4px offset. Phone links use tabular figures.

## Do's and Don'ts

### Do:
- **Do** paint the ground in stucco and the bar, the case, and the Meister band in fired enamel.
- **Do** keep signal orange on the request control, with signal-ink type, and enamel on the route action.
- **Do** lock 265 in a square porcelain cell at the right edge of the enamel bar, on every width.
- **Do** set hours and the phone in tabular figures.
- **Do** separate lists and the timetable with a 1px enamel hairline.
- **Do** leave the case, panels, fields, map, and the 265 cell square.
- **Do** show focus as a 2px signal outline, 3px outside the control.
- **Do** play the request-control sheen once, and remove it when reduced motion is requested.

### Don't:
- **Don't** shift enamel toward slate, gray-blue, or a neutral navy.
- **Don't** center a headline stack or place an eyebrow above a title.
- **Don't** tile a section with icons.
- **Don't** spend signal orange on links, bands, or a second competing button.
- **Don't** round the case, the panels, or the fields.
- **Don't** add a second shadow, or a hard offset shadow.
- **Don't** introduce a second typeface.
