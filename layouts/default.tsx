import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Layout extends Vue {
    protected render() {
        return (
            <div>
                <nuxt />
            </div>
        )
    }
}
