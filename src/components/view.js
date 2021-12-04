import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class extends Plugin {
  init() {
    console.log('SimpleBoxUI#init() got called');
    this._defineToolbar();
    this._defineSchema(); // ADDED
    // this._defineConverters();
  }

  _defineToolbar() {
    const editor = this.editor;
    const t = editor.t;

    // The "simpleBox" button must be registered among the UI components of the editor
    // to be displayed in the toolbar.
    editor.ui.componentFactory.add('simpleBox', locale => {
      // The state of the button will be bound to the widget command.
      const command = editor.commands.get('insertSimpleBox');

      // The button will be an instance of ButtonView.
      const buttonView = new ButtonView(locale);

      buttonView.set({
        // The t() function helps localize the editor. All strings enclosed in t() can be
        // translated and change when the language of the editor changes.
        label: t('Simple Box'),
        withText: true,
        tooltip: true
      });

      // Bind the state of the button to the command.
      // buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () => editor.execute('insertSimpleBox'));

      return buttonView;
    });
  }

  _defineSchema() {
    const schema = this.editor.model.schema;

    schema.register('simpleBox', {
      // Behaves like a self-contained object (e.g. an image).
      isObject: true,
      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowWhere: '$block'
    });

    schema.register('simpleBoxTitle', {
      // Cannot be split or left by the caret.
      isLimit: true,
      allowIn: 'simpleBox',
      // Allow content which is allowed in blocks (i.e. text with attributes).
      allowContentOf: '$block'
    });

    schema.register('simpleBoxDescription', {
      // Cannot be split or left by the caret.
      isLimit: true,

      allowIn: 'simpleBox',

      // Allow content which is allowed in the root (e.g. paragraphs).
      allowContentOf: '$root'
    });
  }

  _defineConverters() {                                                      // ADDED
    const conversion = this.editor.conversion;

    conversion.elementToElement({
      model: 'simpleBox',
      view: {
        name: 'section',
        classes: 'simple-box'
      }
    });

    conversion.elementToElement({
      model: 'simpleBoxTitle',
      view: {
        name: 'h1',
        classes: 'simple-box-title'
      }
    });

    conversion.elementToElement({
      model: 'simpleBoxDescription',
      view: {
        name: 'div',
        classes: 'simple-box-description'
      }
    });
  }
}
