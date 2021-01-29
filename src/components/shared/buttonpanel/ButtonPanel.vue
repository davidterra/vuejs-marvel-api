<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="btn-group">
      <button :type="btnType" class="btn btn-sm" :class="changeStyle" @click="fireAction()">
        {{ btnLabel }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        btnType: {
            required: true,
            type: String,
        },
        btnLabel: {
            required: true,
            type: String,
        },
        btnShowMessage: {
            required: false,
            default: false,
            type: Boolean
        },
        btnStyle: {
            required: false,
            default: 'btn-outline-secondary',
            type: String
        }
    },

    methods : {
        fireAction() {
            if(this.btnShowMessage) {
                if(confirm('Confirma a opepração?')){
                    this.$emit('btnFired')
                }
                return;
            }

            this.$emit('btnFired');

        }
    },

    computed: {
        changeStyle() {
            switch(this.btnStyle) {
                case 'danger':
                    return 'btn-outline-danger'
                default:
                    return 'btn-outline-secondary'
            }
        },
    },
};
</script>
<style scoped>
</style>