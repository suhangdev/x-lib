import { Component, Vue } from 'vue-property-decorator'
import './index.module.less'
@Component({
})
export default class DemoItem extends Vue {
    mounted() {
        console.log(this.$route.params.demoitem)
    }
    render() {
        return (
            <div class="demo">
                {this.$route.params.demoitem}
            </div>
        )
    }
}