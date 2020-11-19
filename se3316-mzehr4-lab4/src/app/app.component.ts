import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Timetable Planner';
  

  createSchedule() {
    var scheduleName = (<HTMLInputElement>(
      document.getElementById('scheduleName')
    )).value;
    if (scheduleName.length == 0) {
      console.log('No input');
    } else {
      fetch('/api/createSchedule/' + scheduleName, { method: 'POST' })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
        });
    }
  }

  viewSchedules() {
    document.getElementById('viewSchedules').innerHTML = '';
    const ul = document.getElementById('viewSchedules');
    fetch('/api/viewSchedules')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        Object.keys(data).map(function (key, index) {
          let content =
            'Schedule Name: ' +
            key +
            '  || Number of courses: ' +
            Object.keys(key).length;
          const item = document.createElement('li');
          item.appendChild(document.createTextNode(content));
          ul.appendChild(item);
        });
      })
      .catch();
  }

  deleteSchedule() {
    let toBeDeleted = (<HTMLInputElement>(
      document.getElementById('scheduleToDelete')
    )).value;
    if (toBeDeleted.length == 0) {
      console.log('No input');
    } else {
      fetch('/api/deleteSchedule/' + toBeDeleted, { method: 'DELETE' }).then(
        (data) => {
          console.log('Schedule: ' + toBeDeleted + ' deleted');
        }
      );
    }
  }

  deleteAllSchedules() {
    fetch('/api/deleteAllSchedules', { method: 'DELETE' })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Schedules all deleted');
      });
  }

  showSchedule() {
    document.getElementById('showSchedule').innerHTML = '';
    let scheduleName = (<HTMLInputElement>(
      document.getElementById('showScheduleCourses')
    )).value;
    if (scheduleName.length == 0) {
      console.log('No input');
    } else {
      fetch('/api/getSchedule/' + scheduleName)
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          const ul = document.getElementById('showSchedule');
          Object.keys(data).map(function (key, index) {
            let content = 'Course Code: ' + key + ' Subject Code: ' + data[key];
            const item = document.createElement('li');
            item.appendChild(document.createTextNode(content));
            ul.appendChild(item);
          });
        });
    }
  }
}
