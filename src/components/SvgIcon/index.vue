<template>
  <div
    v-if="isExternals"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-bind="$attrs"
  />
  <!--多层组件监听 Vue2：v-bind="$attrs" v-on="$listeners"  Vue3：v-bind="$attrs"-->
  <svg v-else :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script lang="ts">
import { isExternal } from "../../utils/validate";
import { computed } from 'vue'
export default {
	name: "SvgIcon",
	props: ['iconClass','className'],
	setup(props: { iconClass: string, className: string }) {
		const { iconClass, className } = props

		const isExternals = computed(() => {
			return isExternal(iconClass);
		})

		const iconName = computed(() => {
			return `#icon-${iconClass}`;
		})

		const svgClass = computed(() => {
			if (className) {
				return "svg-icon " + className;
			} else {
				return "svg-icon";
			}
		})

		const styleExternalIcon = computed(() => {
			return {
				mask: `url(${iconClass}) no-repeat 50% 50%`,
				"-webkit-mask": `url(${iconClass}) no-repeat 50% 50%`
			};
		})


		return {
			isExternals,
			iconName,
			svgClass,
			styleExternalIcon
		}
	}
};
</script>
<style scoped>
.svg-icon {
  width: 1.1em;
  height: 1.1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>