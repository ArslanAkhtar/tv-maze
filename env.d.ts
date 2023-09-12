/// <reference types="vite/client" />

declare module "dompurify" {
	import { PluginObject } from "vue";
	const DOMPurify: PluginObject<any>;
	export default DOMPurify;
}
