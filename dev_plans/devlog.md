# Design requirements
- Minimalist (try to save room space, so that you can do it easily even on a mobile device)
- Responsive
- Intuitive, self-explanatory (avoid needing to put a help me section)
# Functionality
- Set and name tasks
- Click and drag task time blocks into a linear schedule
- Allow repeatable schedules or not
- Automatic voice pronunciation for the news task change
- Pause schedule
- Restart schedule
- Reset time counter
- Tasks total time counter
- Progress-bar through a scheduled loop
# UI notes
- 3 tabs; for sake of phone use, 3 little dots like on phones panel switching for swiping between panels as a panel indicator, don't allow panel swiping to return to start, i.e. swap to right one then right again to go to left one (on desktop same, but instead recommended to click on the dots)
  - Tab 1: minimal timer, button like; displays current task, next task, time till next task (maybe also progress bar for task cycle, number of completed cycles, and total time spent so far on the cycles)
  - Tab 2: cycle schedule planning
  - Tab 3: elasped time on schedule tasks
  - Note: for easy of use, put tab 1 in the left most (no confusion on which side to swipe to get to scheduleing or analysis; put schedule ahead of analysis as I'd say scheduling is more common to be used)
- Tasks list: task blocks for drag and drop come in blocks with their name in different colours in a vertical scrollable line region (sorted alphabetically); exists a + button fixed at the end of the scorllable region for adding new task
- Increment list: a horizontal bar, non-scrollable, of preset blocks of toggleable radio choices (choose 1) which is used to increment/decrement the time for task
- Task schedule: a vertical line of horizontal entries again in its own scrollable vertical region (should be able to click and drag entries around to reposition); each entry has from left to right
  - Name of task
  - +, -, x buttons at the end corresponding to increment/decrement time of task corresponding to increment amount chosen in the increment list, and third x button is for deleting entry
- Buttons
  - Repeat cycle button: toggle on/off button as an option (signify as toggle by giving the toggle symbol)
    - Alternatively do a 2 button toggle, one is repeat/other is not repeat
  - Set schedule button: clicking sets in new schedule and jumps back to the timer page, to which user can choose to start the cycle or not; and it clears the old schedules
  - Editing schedule buttons
    - Clear button: clears schedule entirely
  - All time measured in seconds
Test to see if goes well, if not go the menu method for intuitiveness
# Notes
- Currently bind cycle task times to cycle plan, i.e. your old task times of a cycle is cleared when new task begins; new schedule calls for entirely new time tracking
# Todo
- Versions
  - [x] 0.1.0
    - Bottom of page menu
  - [x] 0.2.0
    - Schedule list component
  - [x] 0.3.0
    - Timer timing and pause ability complete
  - [ ] 0.4.0
    - Setting entry in schedule list
  - [ ] 0.5.0
    - Task time increment component complete
  - [ ] 0.6.0
    - Schedule entry component complete
  - [ ] 0.7.0
    - Schedule elapsed time component complete
  - [ ] 0.8.0
    - Linking of timer task display, cycle schedule, schedule time record data object complete (use a single coordinated data object to contain the info ideally, e.g. under the App component)
  - [ ] 0.9.0
    - Assembly of 3 tabs of app
  - [ ] 1.0.0 (main release, core complete)
    - Bug testing
    - Beautify
    - Usability testing on pc, tablet, phone; responsive ui
# Potential future additions
- Warn that upon changing your schedule all will be lost to your previous schedule and the clock will reset
- Find way of storing user data, e.g. via google acount or facebook or whatnot so kinda like clockify
- Analysis of time use in tasks via graphical means (as opposed to a table) on tab 3
- Allow exporting of schedule cycle, current execution status, and task time counts to a json file to allow easy loading back (but ideally try to do the online account data store method)
- Allow tasks to have descriptions added to them; but the timing is still counted as under the same overall task (though records will show finer sub tasks under the main task time)
- Allow time change by directly clicking and inputing time to schedule entry