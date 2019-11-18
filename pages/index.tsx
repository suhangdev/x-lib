import { Component, Vue } from 'vue-property-decorator'
import content from './content'
import './index.module.less'
@Component({
    components: {
        content,
    }
})
export default class Index extends Vue {
    render() {
        return (
            <div class="index">
                <nuxt-link to="/content">start</nuxt-link>
            </div>
        )
    }
}