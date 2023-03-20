import Component from '@glimmer/component';

export default class ViewDetailsComponent extends Component {
  constructor() {
    super(...arguments);
    console.log('from component');
  }
}
