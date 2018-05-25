import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventManageModes } from '../../../constants/event-manage-modes';
import { EventService } from '../../../services/event.service';
import { EventItem } from '../../../models/event';
import { first, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../../../services/user.service';
import { UserItem } from '../../../models/user';

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrls: ['./manage-event.component.scss']
})
export class ManageEventComponent implements OnInit {
  manageModes = EventManageModes;
  activeMode: EventManageModes;
  event: EventItem;
  users: Array<UserItem> = [];
  selectedUsers: Array<UserItem> = [];
  isLoadingData: boolean;
  eventFormData = {
    name: '',
    description: '',
    attendees: ''
  };
  constructor(
    private modalCtrl: ModalController,
    private eventService: EventService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.isLoadingData = true;
    // get the latest snapshot of events
    this.eventService.$activeEvent
      .pipe(
        first(),
        mergeMap(event => {
          this.event = event;
          if (event) {
            // this means we're editing an event, we'll set the form data and attendees selection
            this.activeMode = this.manageModes.Edit;
            this.setFormData();
          } else {
            this.activeMode = this.manageModes.Create;
          }
          return this.userService.getUsers();
        })
      )
      .subscribe(users => {
        this.users = users;
        this.isLoadingData = false;
      }, err => {
        console.log(err);
        this.isLoadingData = false;
      });
  }

  /**
   * @author Ahsan Ayaz, Akash Agrawal
   * @desc Sets the event form data (name & description)
   * Also sets the event attendees based on the provided event data
   */
  setFormData() {
    this.eventFormData = {
      ...this.eventFormData,
      ...{
        name: this.event.name,
        description: this.event.description
      }
    };
    this.event.attendees.map(attendee => {
      this.selectedUsers.push(attendee);
    });
  }

  /**
   * @author Ahsan Ayaz, Akash Agrawal
   * @desc A function to track the users by their emails as the trackByFn
   * @param user - the current user in the *ngFor loop
   */
  trackUserByEmail(user: UserItem) {
    return user.email;
  }

  /**
   * @author Ahsan Ayaz, Akash Agrawal
   * @desc Returns whether the provided user is currently selected as an attendee or not
   * @param user - user to check whether attendee or not
   * @returns {boolean} - if the user is an attendee of the event
   */
  isUserSelected(user: UserItem): boolean {
    return this.selectedUsers.some(selectedUser => {
      return user.email === selectedUser.email;
    });
  }

  /**
   * @author Ahsan Ayaz, Akash Agrawal
   * @desc Triggers when the user item is tapped on the `Select attendees` section
   * @param user - the user item that is clicked
   */
  toggleUserSelect(user: UserItem) {
    const userSelected = this.isUserSelected(user);
    if (userSelected) {
      this.selectedUsers = this.selectedUsers.filter(selectedUser => {
        return selectedUser.email !== user.email;
      });
    } else {
      this.selectedUsers = [...this.selectedUsers, user];
    }
  }

  /**
   * @author Ahsan Ayaz, Akash Agrawal
   * @desc Triggers on the save button click from the header
   * Based on the active mode, either creates an event or updates the event being edited
   */
  saveEvent() {
    const event = {
      ...this.event ? this.event : {},
      ...this.eventFormData,
      ...{
        attendees: this.selectedUsers
      }
    };
    if (this.activeMode === this.manageModes.Create) {
      this.eventService.addEvent(event);
    } else {
      this.eventService.updateEvent(event);
    }
    this.dismiss();
  }

  /**
   * @author Ahsan Ayaz, Akash Agrawal
   * @desc Dismisses the modal.
   */
  dismiss() {
    this.modalCtrl.dismiss();
  }

}
