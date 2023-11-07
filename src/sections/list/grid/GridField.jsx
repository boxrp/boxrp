import { defineComponent } from "vue";
import Chip from "/src/components/Chip.vue";
import Avatar from "/src/components/Avatar.vue";

/**
 * Implement the GridField component in JSX rather than as a template because we want more JS control over the rendering.
 */
export default defineComponent({
    props: ["field", "item"],

    render() {
        const { id, type } = this.field;
        const value = this.item[id];
        const option = this.field.option(value);
        switch (type) {
            case "name":
                return <div className="font-medium">{value}</div>;
            case "status":
                return (
                    <div>
                        <Chip color={option.color}>{option.value}</Chip>
                    </div>
                );
            case "boolean":
                return <div className={`justify-center icon ${value ? "text-indigo-500" : ""}`}>{value ? "radio_button_checked" : "radio_button_unchecked"}</div>;
            case "start":
            case "due":
                return <div className="">{date(value * 1_000)}</div>;
            case "accounts":
                return <Avatar name={value} />;
            default:
                return <div>{value}</div>;
        }
    },
});

const withYear = (Intl.DateTimeFormatOptions = { weekday: "short", year: "numeric", month: "short", day: "numeric" });
function date(value) {
    const date = new Date(value);
    return date.toLocaleDateString("en-US", withYear);
}
