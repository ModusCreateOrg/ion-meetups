import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { EventManageModes } from '../../constants/event-manage-modes';
import { EventItem } from '../../models/event';
import { UserItem } from '../../models/user';
import { EventsProvider } from '../../providers/events/events';

@IonicPage({
  name: 'manage-event-page'
})
@Component({
  selector: 'page-manage-event',
  templateUrl: 'manage-event.html',
})
export class ManageEventPage {
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
    private eventService: EventsProvider,
    private navParams: NavParams,
    private userService: UserProvider,
    private viewCtrl: ViewController
  ) { }

  ngOnInit() {
    this.isLoadingData = true;
    // get the latest snapshot of events
    this.event = this.navParams.get('event');
    if (this.event) {
      // this means we're editing an event, we'll set the form data and attendees selection
      this.activeMode = this.manageModes.Edit;
      this.setFormData();
    } else {
      this.activeMode = this.manageModes.Create;
    }
    this.userService.getUsers()
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
    this.viewCtrl.dismiss();
  }

}
