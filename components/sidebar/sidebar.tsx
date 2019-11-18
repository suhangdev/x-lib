import { Component, Vue } from 'vue-property-decorator'
import './sidebar.module.less'
@Component({})
export default class Sidebar extends Vue {
    render() {
        return (
            <div class="sidebar">
                <nuxt-link to="/content/123">list</nuxt-link>
            </div>
        )
    }
}