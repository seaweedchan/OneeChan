### v4.4.0:
-Crunchbang and Yuno emoji

### v4.3.9:
-Give spoiler styling to <s> elements since moot doesn't know HTML apparently

[Post-Update]
-Fix "None" and "Overlapping Borders" in Margin Between Replies
-Fix "Minimal" hopefully
-Fix quotes in spoilers with new <s> element
ahdesuka:
	-Fix options menu becoming unresponsive when deleting mascot

### v4.3.8:
-Unmoot /b/

[Post-Update]
ahodesuka:
	-Fix mascot adding and deleting
	-Fix QR field in FF19

### v4.3.7:
-Support for new catalog links -- subject to change with 4chan X support, I'm sure.

[Post-Update]
-Get rid of sidebar and sidebar elements on catalog
-Don't move sticky nav with left sidebar
-Reposition a few icons
-Change text of cataloglink to just "C" to be less intrusive
-Dropped 4chan X support on catalog
Hupotronic:
	-Fix ExLinks details getting stretched to 100% width
-Make Catalog toggle option visible
-On catalog with Custom Navigation Links, only style the link for the catalog
-Remove SS-like sidebar as well in catalog
-New suboption for Custom Navigation Links to replace them in the catalog with catalog versions
-Make Reveal All Spoilers affect catalog
-Add support for catalog settings menu

### v4.3.6:
-New option under Updater and Stats Position: Fixed Top Left (default option renamed to Fixed Top Right)

### v4.3.5:
-Fix issue with #stats and #updater in some cases covering up icons.
-Fix incorrect not-autohide watcher positioning.
-Add options for menu / hide button content that accepts text or a URL

[Post-Update]
-Add tip to empty watcher when auto-hide is disabled
-Remove gap from former watcher position when auto-hide disabled
-Remove pony emoji
-Changed Emoji Icons description to contain a list of available emoji
-Max font size changed to 18
-Capitalize all button names in options, and rename the "Edit" button to "Save" when inside the theme editor

### v4.3.4:
-New option: Icon Position
-New option: Updater and Stats Position
-Defaults reverted to the old layout
-Expand icon in OneeChan icon theme edited slightly

[Post-Update]
-NSFW button added. Click anywhere but the button to change SFW theme, click NSFW button to change NSFW theme. Add indicator for SFW and NSFW themes
-Added SFW button as well. Removed SFW/NSFW Themes option as it is now redundant. Non-button click sets both.

### v4.3.3:
-#stats and #updater now floating to allow for manual positioning
-All toolbox icons moved up to the top
-Expand image controls now autohide
-New expand icon for OneeChan (to fit in when with the rest of the icons)
-New option: "Add Background to Stats/Updater"

### v4.3.2:
-New category: Icons
-New option: Icon Theme
-New icon theme: 4chan SS (Raphael)

[Post-Update]
-Plan 9, GNU, and OpenBSD emoji

### v4.3.1:
-Redo menu

### v4.3.0:
-Now allowed to pick "Custom" for Sidebar Side Margin and Non-Sidebar Margin. The latter of which had to be renamed due to bugs.
-Moved mascot and name down on Float

### v4.2.9:
-New option: SS-like Sidebar
-Dont let navtopright overlap menu
-Only switch placement of submenu if not using right sidebar

### v4.2.8:
-Added new mascots from /cm/
-Fix margin for cut-off mascots

[Post-Update]
-Disable overflow when flipped + left sidebar (buggy)
-Reduce top padding of slim replies
-On Fit Width, switch placement of submenu
-Fix left sidebar + flipped mascot + overflow

### v4.2.7:
-New theme option: Navigation Opacity

[Post-Update]
-Move bottom board name depending on QR position
-Renamed 4chan Rewired to 4chan Rewired Modded, credit given to ahodesuka. Style based on REAL 4chan Rewired coming eventually.
-New theme: Yotsuba B Rewired
-Chrome: Fix board name/subtitle issues
-Last.mu: Fix width being weird
-Last.mu: Make info smaller
-New theme: Ao ni sarasu
-Fix .filter_highlight not matching sage color as intended
-Add default colors to admin/moot

### v4.2.6:
-Option to disable pages navlinks
-Option to disable navigation bar

[Post-Update]
-Fully fix vertical pages
-Allow reclicking of hide thread button on expanded image
-Make Yotsuba closer to real thing
-Fix Yotsuba themes moving up a pixel on quote preview
-Add option: Expanded Images Cover QR
-Make Yotsuba B's backlink color its original color
-Fix mobile pagelist showing on normal

### v4.2.5:
-Added back previous/next links, styled around 4chan X's Index Navigation

[Post-Update]
-Minimize the effect of partial flashing in Firefox
-Fix width difference in QR
-Fix Yotsubas not recoloring html::after
-Dont hide fixed vertical pages

### v4.2.4:
-Change #navtopright to make extension buttons position vary depending on whats installed
-Add background to icons if sidebar is disabled

### v4.2.3:
-Changed "Side Margin" to "Non-Sidebar Side Margin"
-Added new option: "Sidebar Side Margin" to customize the other side
-When sidebar is disabled, reserve edge is disabled, and Layout is set to Fit Width, move the hide thread button and menu button abut 250px to the right to not be hidden behind the OneeChan buttons

[Post-Update]
-Fully center pagelist of Post Form is set to Float
-Outline Persistent QR and Auto Hide QR options in 4chan X if unchecked

### v4.2.2:
-New option: Use Post Info Color
-New sub-option: Add Shadow?
-New theme options: Post Info Background Color, Post Info Border Color
-Added 10px margin underneath ad

[Post-Update]
-Use new icon for watcher
-Add unicode icons for 4chan X buttons
-Last.mu support
-Fix hidden thread/reply styling
-Fix buttons covered up by backlinks
-Fix non-default Backlink position being incorrectly positioned

### v4.2.1:
ahodesuka:
	- Fix whitespace-only delimiter
-Added "title" section to Nav Links, controls the on-hover title of custom links
-Changed all custom nav links defaults to what they'd be without custom nav links enabled -- to be used as a board hider

[Post-Update]
-New option: Use Title Text for Selected Board (sub-option for Custom Navigation Links)
-Fix YouTube Link Title
-Fix replies not wrapping on Fit Content
-Make emails more visible
-Fix Chrome not allowing hover of announcement and slideout nav
-Fix Chrome quotelinks not applying line-through
-Give /f/ columns a border, edit BakaBT for /f/

### v4.2.0:
ahodesuka:
	 - Settings window will now close when clicking outside of the window.

### v4.1.9:
-Unload default 4chan CSS file for slight performance increase

[Post-Update]
-Remove all ads but one if ads are not disabled
-New option: Recolor Even Posts

### v4.1.8:
-Slight performance increase from removal of * selector
-New option: Navlinks Position

[Post-Update]
-Rehost all mascots on a secure server -- minus.com -- that supports TLS
-Fix delimiter
-Make prefetch label smaller
-Recenter ads
-Reduce ads to one ad... No reason for three

### v4.1.7:
-Restyle QR if 4chan Pass is detected (Make SURE you have Mayhem's 4chan X 2.35.3 or higher / ihavenoface's 4chan X 2.35.5 or higher or you will have issues.)

[Post-Update]
-Fix visibility of Pass-related messages (on login) as well as Pass page colors
-Remove Mayhem's default box-shadow for .qphl (It was made for Opera but OneeChan does not support Opera)
-Fix Expanding Form Inputs with new large textarea
-Fix ad blocking with new class (moot ur a fgt)
-Removed ExSauce option (deprecated -- use ExLinks instead http://hupotronic.github.com/ExLinks/)
ahodesuka:
	-Don't apply to /rs/
	-Don't hide scrollbars when opening options
-Style /p/ exif data

### v4.1.6:
-Fix spoiler text overlapping with file input text
-Stop truncating quick reply error message

[Post-Update]
-Only reposition non-inline OP menu button
-Reduce OP menu/hide button opacity so its not as intrusive
-Apply sage color to #errmsg

### v4.1.5:
-Add Monokai theme

[Post-Update]
-Make quick reply .move height and padding consistent
-Fix top nav color not showing right on hover without custom nav links
-Change a few Monokai colors
-Use same textarea height in both browsers
-Fix issue with Consolas and Monospace messing with spacing in options

### v4.1.4:
-Allow floating QR resizing

[Post-Update]
-Removed pointer-events of #bBanner when sidebar is disabled

### v4.1.3:
-Add back in BakaBT color scheme from old OneeChan
-Make mascot positions more consistent
-Add "Overlapping Borders" option for Margin Between Replies

[Post-Update]
-Fix up 4sight
-Add 4chan Sound Player support from SS
-Fix bug with mascot offset when post form set to Float
-Add support for ExLinks menu button
-Change up code colors to fit into themes
-Align OP hide/menu links with reply links
-Fix board-specific mascots
-Fix Chrome mascot alignment

### v4.1.2:
-Change navtopr to navtopright for 4chan X settings button

[Post-Update]
-Remove regular links in navtopright
-Fix scrollbar appearing
Zixaphir:
	-Automatically disable 4chan's "extension"

### v4.1.1:
-Fix greentext in Reveal All Spoilers option
-Add option to disable ads, ads enabled by default (AdBlock users wont see a difference)
-Fix Backlink font size not abiding by font size option
-Fix slideout navigation scaling by font size causing some links to be hidden
-Set expanded images to be covered up by board navigation
-Add option to toggle slideout announcement

[Post-Update]
ahodesuka:
  -Fix announcement color
-Fix size of hide thread button in Opera

### v4.1.0:
-Fix hidden mascots being selected with Select All
-Add "Reveal All Spoilers" option
-Add update, changelog, and issues links

[Post-Update]
-Added in pinku theme from DrooidKun
-Fix new links overlapping in other tabs
-Fix Firefox selection appearance
-Fix flashing of pink on old highlighted posts

### v4.0.9:
-Change "Hide Checkboxes" to "Menu-Only Mode" which hides the deleteform as well as checkboxes, for full replacement by 4chan X menu
-Fix issue where #imgControls checkbox is not hidden (Linux only)

[Post-Update]
-Fix issue where certain highlighted posts in Chrom* wouldn't get styled
-Fix issue where body would wait to style
-Fix 4chan Rewired theme not accepting new Reply Opacity values if modified.
-Add in ahodesuka's highlight changes
-Fix issue with OP getting highlighted pushing everything out
-Add border back into Dark Flat
-Remove background from OP qphl
-Fix issue with certain themes not apply .qphl border if they have no border

### v4.0.8:
-Add "Reply Opacity" option in themes' settings for control and possibly speed, defaults to 1.0 except on 安心院なじみ and 4chan Rewired. Edit this to a value of 0.0 to 0.9 if you want transparent replies, 0.0 being fully transparent.
-Edit colors of Yotsuba/B/P's navigation to look less out of place at the top of the page

### v4.0.7:
-Fixed a few z-index issues
-Re-added back in Slideout Navigation with a new option to switch between "List" and "Compact", default to List.
-Changed 4chan X link to a wrench icon, and OneeChan link to a gear icon
-Auto detection of light or dark icons based on background color, rather than relying on custom CSS sections
-Fix /f/ replies ignoring sidebar

### v4.0.6:
ahokadesuka:
  -Emoji position option
  -SFW/NSFW separate themes option
  -Madotsuki emoji
  -Fixed issues with deleting mascot defaults, and slightly redesigned mascot dialog

### v4.0.5:
-Bring back navigation/pages styling from userstyle

### v4.0.4:
-Fix /f/
-Revert Hide Tripcode option for Smart Tripcode Hider
-Add "Hide Filtered 4chan X Links" option
-Fix autohide thread watcher option when disabled

### v4.0.3:
-z-index tweaks

### v4.0.2:
-Add zenburned theme
-Add new Patchouli mascot
-Tweak prefetch label
-Fix navlinks placement
-Fix thread hider link in Chrome
-Style the front page
-Move navigation links based on side bar and side margin


### v4.0.0:
-Moved to userscript, forked now from 4chan Style Script rather than AppChan
-New Themes: Original Minimalistic Mayhem, Solarized Light, Blackboard, Vimyanized Dark, and everything that was already in 4chan SS

### v3.4
-New icons to replace old ones
-Operating System emoji
-Support for new 4chan X menu
-Performance improvements
-New option: Hide Checkboxes?

### v3.3
-Code tag support
-YouTube URL Replacer / Link Title support
-New option: Reveal All Spoilers

### v3.2
-Fix for Chrome users for many colors being off due to Moot adding !important everywhere

### v3.1
-Updated for the new HTML
-Expand Textarea on Focus -> Expand Inputs on Focus (with just textarea as an option)

### v3.0
-New mascots: Fluttershy, Dawn, Tardis
-New option: Margin Between Replies
-New option: Remove filtered backlinks
-New option: Unreverse unicode names
-New color schemes: BlackberryJam, BakaBT, Yotsuba Purple
-Remove background from transparent captcha
-Support for /vg/, /hm/, and /mlp/
-Fix error page
-Fix Firefox icons disappearing on hover
-Added Sakamoto, Ponyo, Baka, and Rabite emoji
-Improved OneeChan rendering speed
-Redone autohide functionality, allowing for autohiding to appear correctly via 4chan X
-New "List" style Slideout Navigation that displays full board names
-Dropped support for old 4chan X
-Merged Quick Reply / Post Form options, let 4chan X's option to hide the original post form determine its visibility instead
-Options to move emoji to left or right side of names
-Let Firefox center images on its own, rather than letting OneeChan do it
-@media rules implemented to change top padding based on window width
-Bottom padding made more consistent and aligned with quick reply
-Remove white/green backgrounds from text board sections

### v2.9
-New option: Underline links ([Reply], etc)
-New option: Slimmer Replies
-New option: Slideout Navigation (for those who want to remove it)
-Megaupload.com links on /rs/ now have their text replaced with red "Megaupload" text with line-through text decoration, for better indication
-Fixed issue where /rs/ search form was missing with new QR
-Github repository organized to be more accessible
-Fix issue where in 4chan X 2.25, the error message would sometimes not show up due to a lack of changing from the :empty state
-Error messages now given better styling in color schemes
-New QR selection: Horizontal Tabbed Slideout (ala Dark Flat)
-Mascot, delete button, and return button are now repositioned depending on QR type. Use Custom OneeChan Mascot if you'd like to change your mascot's position rather than editing it from OneeChan itself.

### v2.8
-Non-Compact mode fixed with new QR previews section
-Delete/Return buttons moved and redone so as to not cover Submit button on hover -- Now hovering delete icon immediately brings up the delete button at the cursor
-Fix issue where image thumbnails overlap QR
-New options added for Board Name and Logo, to put each at their static position at the top of the page like normal 4chan.
-New font: Trebuchet MS, backup of Verdana.
-New option: Current Board Highlighting. No longer has the color it did when the option existed in AppChan, so that it fits in in all color schemes.
-New option: reCAPTCHA Opacity. Selections are values from 0.1 til 1.0, letting you choose your own.

### v2.7
-Muted color scheme redone and added in
-PaisleyChan split into Lite and full versions, the full being closer to the original PaisleyChan, Lite being the colors only.
-Terminal color scheme added in for pretending to be Viper
-PaisleyChan given a few bug fixes
-Issue with thread watcher positioning fixed
-New QR file upload button styled in Chrome
-New QR replies section (after you click the +) moved down near the button
-Firefox Browse button moved to the left, away from the Submit button

### v2.6
-Bugfixes and polish for last update
-PaisleyChan color scheme added (open to suggestions for it -- sorry, no cool name effects without hurting performance)
-Navigation links moved so as to not overlap header

### v2.5
-Post Area and Quick Reply options merged
-Quick Reply redone for new Quick Reply, which is made optional
-TextareaHeight removed to keep mascot support in both old and new QR

### v2.4:
seaweed:
-"Toolbox" toolbar redone, icons made smaller and moved to be less intrusive
-New Margin Style option: "Match Sidebar"
-New option to expand textarea when it has focus
-Start adding support for new 4chan X quick reply for whenever its done (a new option will be made so as to not force users to upgrade 4chan X immediately, in case they don't like the new quick reply)
-Fix error messages not moving with different textarea heights
-Fixed issue where announcements icon overlapped thanks to SOPA (damn you, SOPA!)

zixaphir:
-4sight changed to take up window

### v2.3:
-New color scheme: Minimalistic Mayhem
-Miku mascot changed
-Gasai Yuno mascot added
-Stickies and closed threads given better indication

### v2.2:
-Fixed toolbox color looking off in Yotsuba
-New "Normal (4chan default)" added to Margin Style option
-Fixed issues with moot's announcements on the error page
-Slight redesign of the 4chan X settings overlay
-Photon, Solarized, Tomorrow, and AppChan quote previews redone with border and different colors
-Changed Chrome checkmarks from background image to content
-Muted color scheme removed (temporarily until a redesign)
-Fixed image controls select sometimes having the wrong placement
-Fixed issue where ObsidianChan lacked background image on /rs/ and the front page
-Fixed 'File Only' being a few pixels too high up in Firefox
-Fixed issue where expanded filenames wouldn't appear with "Browser Default" font size
-General cleanups of non-existing or irrelevant browser prefixes (like -moz-border-radius)
-Removed Golden Darkness mascot because its NSFW
-Fixed issue where tripcodes appeared with bigger font sizes in quote preview and the OP
-Fixed issue where thread separation lines are unevenly positioned between threads
-Reduce Subject font weight in AppChan to distinguish it from poster name
-Fixed issue where the move cursor would appear on the name field of a replaced quick reply
-Solarized color tweaks of tripcodes and subjects thanks to "a million pies"
-"URL bubbles", which were just background colors when links were hovered, removed
-Pages brackets removed
-Fixed issue where currently selected page number would have a grayish background behind it
-AppChan and Tomorrow links on hover recolored
-Moved delete buttons down on slideout to match other slideout elements
-New "Top Stickied Header (non-stickied pages" added to Margin Style option
-Textarea Height option redone to move the mascots and error messages with it
-Shana mascot edited to remove bottom padding
-Fixed issue where pages links were centered for the whole page and not just the posts instead

### v2.1:
-Opera support! Lots of bug fixes and design updates for Opera.
-Moot's Announcement bug fixes when not button-only
-Various improvements for the toolbox
-4chan Filter Fix moved to its default floating state
-Fixed issue where Announcement button would show up twice on /t/
-Fixed issue where Yotsuba doesn't style /x/ (creepy!)
-Moved slideout elements down a few pixels
-Fixed issue where quote highlighting is disabled despite 4chan X options in a few light color schemes
-Fix text selecting issue in a few color schemes where selected text would have drop shadows

### v2.0:
-New toolbox! Icons added to replace delete buttons, slideout nav, thread watcher, etc.
-4chan X option animations nuked because they don't work very well
-Green background from 4chan X's updater on new count removed
-Floating QR z-index fix
-"Centered Posts?" option changed to "Margin Style", "Small Left Margin" added and made default
-Issue with pages being out of place when put on the side fixed
-Postertrip in the quote preview added to what font-size changes
-Text decorations redone, mostly for Mayhem's 4chan X built-in filter
-Fixed issue where scrollbar buttons were removed in Firefox with Custom Scrollbars disabled
-Removed resize grip from textarea since it doesn't do anything
-Slideout Watcher and Moot's Announcements options redone for toolbox

### v1.1:
-New option: Slideout Watcher?
-Noko/Sega Identifiers moved into their own option, separate from Sage Identifier
-Sans-serif removed, replaced with separate Arial and Helvetica fonts
-Mascot for Azusa changed, thanks to /w/
-Two font size options added: Extra Small (10px), Small (11px)
-Stickied pages padding bug fixed
-Watch button changed to static position, but only outside of threads
-Report button redesign removed because it doesn't work with Chrome
-Fixes for 4sight

### v1.0:
-Slideout navigation support for box-shadow and border-radius added
-Announcement issues from AppChan fixed, font sizes reduced
-Front page centering issue from AppChan fixed (issue was Firefox only)
-Header width issue from AppChan fixed
-Changes to postform labels
-#attach moved intelligently
-Positioning of labels and checkboxes being different in Chrome fixed
-Removed brackets from "Spoiler Image?"
-Removal of marquee so moot can never have scrolling text again :3
-Moved redtext option so it only affects boards
-Padding of .pages fixed, looked odd with different options
-Reflection added to logo image for Chrome users
-New mascots added (Azusa, Seraphim, Asuka, Patchouli)
-Made #header slightly transparent

### v0.5:
-New option: Textarea height
-Redesigned report button
-Slideout navigation word spacing fix

### v0.4:
-Thread watcher redone
-Positioning changes to eliminate awkward empty space

### v0.3:
-Removed risque mascots to make OneeChan appropriate for Userstyles.org
-Fixed #navbot positioning issue
-Modified #header and #navbot colors in every color scheme

### v0.2:
-Removed Majics Mode
-Removed Transparent Replies option
-Moved Sage/Noko/Sega identifiers (from Majics Mode and Sage Identifier) into new option: Sage/Noko/Sega Identifiers
-Moved custom board names into new option: Custom Board Names

### v0.1:
-OneChan is created!
