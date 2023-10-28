import { defineComponent } from 'vue'

export default defineComponent({
    props: ["column", "item"],

    render() {
        const { id, type, options } = this.column;
        const value = this.item[id];

        switch (type) {
            case "name":
                return (<div class="font-medium">{ value }</div>)
            case "status":
                const { label, color } = options[value];
                return (<div class="justify-center" style={'background-color:' + color}>{ label }</div>)
            case "boolean":
                return (<div class={`justify-center icon ${value ? 'text-indigo-500' : ''}`}>{ value ? 'radio_button_checked' : 'radio_button_unchecked' }</div>);
            case "start":
            case "due":
                return (<div class="justify-center text-center">{ date(value * 1_000) }</div>)

            default:
                return (<div>{ value }</div>);    
        }
    }
});

const withYear = Intl.DateTimeFormatOptions = { weekday: "short", year: "numeric", month: "short", day: "numeric" }; 

function date(value) {
    const date = new Date(value);
    return date.toLocaleDateString("en-US", withYear);
}