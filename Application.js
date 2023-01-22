import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk?version=4.0';

class ExampleApplication extends Gtk.Application {
    constructor() {
        super({
            application_id: 'my.program',
            flags: Gio.ApplicationFlags.FLAGS_NONE,
        });
    }

    vfunc_activate() {
        super.vfunc_activate();

        this.hold();

        // Example ApplicationWindow
        let window = new Gtk.ApplicationWindow({
            application: this,
            title: 'Example Application Window',
            default_width: 300,
            default_height: 200,
        });

        let label = new Gtk.Label({label: 'hello'});
        window.set_child(label);

        window.connect('close-request', () => {
            this.quit();
        });

        window.present();
    }
}

export default GObject.registerClass(ExampleApplication)
