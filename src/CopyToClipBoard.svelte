<script>
	export let text;

	let success = '';

	function copyTextToClipboard() {
		navigator.clipboard.writeText(text);
		success = 'Copied !';
		setTimeout(()=>{ success=""}, 1000);
	}

</script>

<div>
    <button class="bg-green-900 p-3 rounded-md text-white font-extrabold" on:click={copyTextToClipboard}>Copy</button>
	<p>{success}</p>
</div>
