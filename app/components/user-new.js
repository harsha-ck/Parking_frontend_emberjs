import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class UserNewComponent extends Component {
    @service store;

   @action
   saveUser(event) {
     event.preventDefault();

     const newUser = this.store.createRecord('user', {

       name: this.name,
       email: this.email,
       password: this.password,
       passwordConfirmation: this.passwordConfirmation,
     });

     newUser.save();

   }
}
