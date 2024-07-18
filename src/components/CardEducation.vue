<script setup>
import { ref } from "vue";
</script>

<template>
  <ol class="my-ol">
    <li class="my-li">
      <span class="my-span">
        <svg
          class="my-svg"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
          />
        </svg>
      </span>
      <h3 class="my-h3">
        Flowbite Application UI v2.0.0 <span class="my-badge">Latest</span>
      </h3>
      <time class="my-time">Released on January 13th, 2022</time>
      <p class="my-p">
        Get access to over 20+ pages including a dashboard layout, charts,
        kanban board, calendar, and pre-order E-commerce & Marketing pages.
      </p>
      <a href="#" class="my-link">Download ZIP</a>
    </li>
    <li class="my-li">
      <span class="my-span">
        <svg
          class="my-svg"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
          />
        </svg>
      </span>
      <h3 class="my-h3">Flowbite Figma v1.3.0</h3>
      <time class="my-time">Released on December 7th, 2021</time>
      <p class="my-p">
        All of the pages and components are first designed in Figma and we keep
        a parity between the two versions even as we update the project.
      </p>
    </li>
    <li class="my-li">
      <span class="my-span">
        <svg
          class="my-svg"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
          />
        </svg>
      </span>
      <h3 class="my-h3">Flowbite Library v1.2.2</h3>
      <time class="my-time">Released on December 2nd, 2021</time>
      <p class="my-p">
        Get started with dozens of web components and interactive elements built
        on top of Tailwind CSS.
      </p>
    </li>
  </ol>
</template>

<style scoped>
.my-ol {
  position: relative;
  list-style: none;
}

.my-li {
  margin-bottom: 2.5rem;
  margin-left: 1.5rem;
}

.my-span {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #ebf4ff;
  border-radius: 9999px;
  left: -1rem;
  border: 2px solid #fff;
  border-color: #ebf4ff;
}

.my-svg {
  width: 0.625rem;
  height: 0.625rem;
  color: #3b82f6;
}

.my-h3 {
  margin-bottom: 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.75rem;
  color: #374151;
}

.my-badge {
  background-color: #ebf4ff;
  color: #3b82f6;
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: 0.75rem;
  padding: 0.125rem 0.625rem;
  border-radius: 9999px;
}

.my-time {
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: #9ca3af;
}

.my-p {
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #6b7280;
}

.my-link {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
  background-color: #fff;
  border: 1px solid #d1d5;
}
</style>
