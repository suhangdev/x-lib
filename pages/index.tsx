import { Component, Vue } from 'vue-property-decorator'
import home from './home'
import './index.module.less'
@Component({
    components: {
        home,
    }
})
export default class Index extends Vue {
    render() {
        return (
            <div class="index">
                <nuxt-link to="/home">start</nuxt-link>
            </div>
        )
    }
}