<script setup lang="ts">
import { deviceType, deviceModel, deviceVendor, osName, osVersion, browserName, browserVersion, engineName, engineVersion } from '../lib'
</script>

<template>
	<div id="app">
		<ul>
			<li>Device Type: {{ deviceType() }}</li>
			<li>Device: {{ deviceVendor() }} {{ deviceModel() }}</li>
			<li>OS: {{ osName() }} {{ osVersion() }}</li>
			<li>Browser: {{ browserName() }} {{ browserVersion() }}</li>
			<li>Engine: {{ engineName() }} {{ engineVersion() }}</li>
		</ul>

		<DesktopView>
			<h1>This is rendered only in desktop browser</h1>
		</DesktopView>
		<TabletView>
			<h1>This is rendered only on Tablet</h1>
		</TabletView>

		<MobileView>
			<h1>This is rendered only on mobile</h1>
		</MobileView>
	</div>
</template>