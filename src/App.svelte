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
  <div class="bg-white dark:bg-gray-800 dark:text-white h-screen">
    <div
      class="flex justify-between items-center dark:bg-gray-950 px-3 lg:px-14 py-2 shadow-md"
    >
      <h1 class="font-nothing font-extrabold text-lg md:text-[30px]">
        UnicodeX
      </h1>
      {#if dark}
        <button on:click={toggleDark}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 cursor-pointer"
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
            class="h-10 w-10 cursor-pointer"
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

    <div class="text-center max-w-lg mt-3 mx-auto">
      <label for="english-text">Enter English text:</label> <br />
      <textarea
        class="box-border px-1 mx-1 w-full h-52 border border-gray-300 bg-white dark:bg-gray-900 dark:text-white"
        id="english-text"
        bind:value={englishText}
        on:input={handleInputChange}
        name=""
      />
      <p>Romanized Nepali text:</p>

      <p
        class="h-52 px-1 mx-1 w-full text-left dark:bg-gray-900 border border-gray-300"
      >
        {nepaliText}
      </p>
      <CopyToClipboard text={nepaliText} />
    </div>
    <p class="font-nothing text-xs text-center">
      {" "}
      &copy; Designed & Developed by{" "}
      <a class="underline" href="https://madanbajgai.com.np">MadanBazgai</a
      >{" "}
    </p>
  </div>
</div>
