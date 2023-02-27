// vite.config.ts
import { defineConfig } from "file:///D:/programming/libs/valisk/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import dts from "file:///D:/programming/libs/valisk/node_modules/vite-plugin-dts/dist/index.mjs";
import react from "file:///D:/programming/libs/valisk/node_modules/@vitejs/plugin-react-swc/index.mjs";
var __vite_injected_original_dirname = "D:\\programming\\libs\\valisk";
var vite_config_default = defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/lib/index.ts"),
      name: "lib",
      formats: ["es", "umd"],
      fileName: (format) => `lib.${format}.js`
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9ncmFtbWluZ1xcXFxsaWJzXFxcXHZhbGlza1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvZ3JhbW1pbmdcXFxcbGlic1xcXFx2YWxpc2tcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2dyYW1taW5nL2xpYnMvdmFsaXNrL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuXG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgZHRzKCldLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9saWIvaW5kZXgudHNcIiksXG4gICAgICBuYW1lOiBcImxpYlwiLFxuICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJ1bWRcIl0sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGxpYi4ke2Zvcm1hdH0uanNgLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1EsU0FBUyxvQkFBb0I7QUFDclMsU0FBUyxlQUFlO0FBRXhCLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVc7QUFKbEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFBQSxFQUN4QixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsTUFDNUMsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3JCLFVBQVUsQ0FBQyxXQUFXLE9BQU87QUFBQSxJQUMvQjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
