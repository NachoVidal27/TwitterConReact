import React from "react";

function Tweet() {
  return (
    <div>
      <form method="POST" action="/tweet">
        <section>
          <div class="justify-content-start">
            <h2 class="mt-2">Home</h2>
            <div class="border-start border-end border-bottom border-light">
              <div class="mb-3 d-flex fs-4">
                <div id="userImg" />
                <textarea
                  placeholder="What's Happening?"
                  class="form-control"
                  id="tweet"
                  rows="2"
                  name="tweet"
                ></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button
                  type="submit"
                  class="text-light rounded-pill mb-3"
                  id="tweet-btn"
                  rows="3"
                >
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Tweet;
