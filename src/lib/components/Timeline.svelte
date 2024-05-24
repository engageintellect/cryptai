<script lang="ts">
  import Icon from '@iconify/svelte'
  import { PUBLIC_REPOSITORY_URL } from '$env/static/public'
</script>

<div class="flex flex-col items-center">
  <a
    href={PUBLIC_REPOSITORY_URL}
    class="btn btn-primary flex items-center gap-2"
  >
    <div>built in public</div>
    <Icon icon="mdi:github" class="w-7 h-7" />
  </a>

  <ul class="timeline timeline-vertical lg:timeline-horizontal my-2">
    <li>
      <div class="timeline-start">6/2024</div>
      <div class="timeline-middle">
        <Icon icon="mdi:check-circle" class="w-5 h-5" />
      </div>
      <div class="timeline-end timeline-box">Alpha</div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-start">8/2024</div>
      <div class="timeline-middle">
        <Icon icon="mdi:check-circle" class="w-5 h-5" />
      </div>
      <div class="timeline-end timeline-box">Beta</div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-start">10/2024</div>
      <div class="timeline-middle">
        <Icon icon="mdi:check-circle" class="w-5 h-5" />
      </div>
      <div class="timeline-end timeline-box">Release</div>
      <hr />
    </li>
  </ul>
</div>
