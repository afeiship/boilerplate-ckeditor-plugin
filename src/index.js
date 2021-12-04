import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import View from './components/view';
import Editing from './components/editing';

export default class extends Plugin {
  static get requires () {
    return [Editing, View];
  }
}
