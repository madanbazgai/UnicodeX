<script>
  import nepaliscript from "nepscript";
  import CopyToClipboard from "./CopyToClipBoard.svelte";
  import { darkTheme } from "./store.js";

  const toggleDark = () => ($darkTheme = !$darkTheme);
  // So we can use class:dark
  $: dark = $darkTheme;

  let englishText = "";
  let nepaliText = "";

  const handleInputChange = (event) => {
    englishText = event.target.value;
    nepaliText = nepaliscript(event.target.value) + "।";
  };
</script>

<div class:dark>
  <div class="h-screen bg-white dark:bg-gray-800 dark:text-white">
    <div
      class="flex items-center justify-between px-3 py-1 shadow-md dark:bg-gray-950 lg:px-14"
    >
      <h1 class="font-nothing font-extrabold md:text-[25px]">UnicodeX</h1>
      {#if dark}
        <button on:click={toggleDark}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
            />
          </svg>
        </button>
      {:else}
        <button on:click={toggleDark}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </button>
      {/if}
    </div>

    <div class="mx-2 mt-3 text-center">
      <label class="font-bold" for="english-text">Enter English text:</label>
      <br />
      <textarea
        class=" w-full px-1 mb-1 bg-white border rounded-md outline-none border-gray-400 h-72 md:h-60 dark:bg-gray-900 dark:text-white md:max-w-4xl"
        id="english-text"
        bind:value={englishText}
        on:input={handleInputChange}
        name=""
      />
      <p class="font-bold">Romanized Nepali text:</p>

      <div class="relative md:max-w-4xl mx-auto">
        <p
          class=" px-1 mb-2 mx-1 text-left border rounded-md border-gray-400 h-72 md:h-60 dark:bg-gray-900"
        >
          {nepaliText}
        </p>
        <CopyToClipboard text={nepaliText} />
      </div>
    </div>
    <p class="text-xs text-center font-nothing absolute bottom-2 translate-x-1/2 right-[50%]">
      &copy; Designed & Developed by
      <a class="underline" href="https://madanbajgai.com.np">MadanBazgai</a
      >{" "}
    </p>
  </div>
</div>
