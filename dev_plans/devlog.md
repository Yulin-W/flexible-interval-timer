# Development log
## Brainstorm
### Design requirements
- Minimalist (try to save room space, so that you can do it easily even on a mobile device)
- Responsive
- Intuitive, self-explanatory (avoid needing to put a help me section)
### Functionality
- Set and name tasks
- Click and drag task time blocks into a linear schedule
- Allow repeatable schedules or not
- Automatic voice pronunciation for the news task change
- Pause schedule
- Restart schedule
- Reset time counter
- Tasks total time counter
- Progress-bar through a scheduled loop
### UI
- 3 tabs
  - Tab 1: minimal timer, button like; displays current task, next task, time till next task (maybe also progress bar for task cycle, number of completed cycles, and total time spent so far on the cycles)
  - Tab 2: cycle schedule planning
  - Tab 3: elasped time on schedule tasks
- Schedule tasks list
  - Name of task
  - up, down, +, x buttons for shifting entries up/down and for adding entry at location and for removing entry
- Buttons
  - Repeat cycle button: toggle on/off button as an option (signify as toggle by giving the toggle symbol)
    - Alternatively do a 2 button toggle, one is repeat/other is not repeat
  - Set schedule button: clicking sets in new schedule and jumps back to the timer page, to which user can choose to start the cycle or not; and it clears the old schedules
  - Editing schedule buttons
    - Clear button: clears schedule entirely
  - All time measured in seconds
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
  - [x] 0.4.0
    - Setting entry in schedule list
  - [x] 0.5.0
    - Summary component complete
  - [x] 0.6.0
    - Schedule entry component complete
    - For sake of laziness and because it actually turns out more versatile, time inputs into schedule does not need to be in hhmmss format, e.g. inputting 90min is allowed
  - [ ] 0.7.0
    - Linking of timer task display, cycle schedule, schedule time record data object complete (use a single coordinated data object to contain the info ideally, e.g. under the App component)
  - [ ] 0.8.0
    - Notifications for new task (use some offline voice engine ideally, though if not can start with google's online one)
  - [ ] 0.9.0
<<<<<<< Updated upstream
    - Notifications for new task
=======
    - Add total time elapsed display in summary page
>>>>>>> Stashed changes
  - [ ] 0.10.0
    - Schedule repeat or not repeat functionality
  - [ ] 0.11.0
    - Responsiveness check to ensure works well on mobile
  - [ ] 1.0.0 (main release, core complete)
    - Bug testing
    - Beautify
      - Change favIcon
    - Usability testing on pc, tablet, phone; responsive ui
# Potential future additions
- Updating schedule button would send you back to the timer page
- Clear schedule button: clears schedule entirely
- Warn that upon changing your schedule all will be lost to your previous schedule and the clock will reset
- Find way of storing user data, e.g. via google acount or facebook or whatnot so kinda like clockify
- Analysis of time use in tasks via graphical means (as opposed to a table) on tab 3
- Allow exporting of schedule cycle, current execution status, and task time counts to a json file to allow easy loading back (but ideally try to do the online account data store method)
- Allow tasks to have descriptions added to them; but the timing is still counted as under the same overall task (though records will show finer sub tasks under the main task time)
- Allow time change by directly clicking and inputing time to schedule entry
- Make work well on a phone, i.e. be like a progressive webapp