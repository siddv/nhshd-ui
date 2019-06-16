<template>
  <div class='columns'>
  <div class='container profile'>
    <div class='modal' id='edit-preferences-modal'>
      <div class='modal-background'></div>
      <div class='modal-card'>
        <header class='modal-card-head'>
          <p class='modal-card-title'>Edit Preferences</p>
          <button class='delete'></button>
        </header>
        <section class='modal-card-body'>
          <label class='label'>Name</label>
          <p class='control'>
            <input class='input' placeholder='Text input' type='text'>
          </p>
          <label class='label'>Username</label>
          <p class='control has-icon has-icon-right'>
            <input class='input' placeholder='Text input' type='text' value='pmillerk'>
          </p>
          <label class='label'>Email</label>
          <p class='control has-icon has-icon-right'>
            <input class='input' placeholder='Email input' type='text' value='hello@'>
            <i class='fa fa-warning'></i>
            <span class='help is-danger'>This email is invalid</span>
          </p>
          <div class='control'>
            <div class='control-label is-pulled-left'>
              <label class='label'>Date of Birth</label>
            </div>
            <span>
              <span class='select'>
                <select>
                  <option>Month</option>
                  <option>With options</option>
                </select>
              </span>
              <span class='select'>
                <select>
                  <option>Day</option>
                  <option>With options</option>
                </select>
              </span>
              <span class='select'>
                <select>
                  <option>Year</option>
                  <option>With options</option>
                </select>
              </span>
            </span>
          </div>
          <label class='label'>Description</label>
          <p class='control'>
            <textarea class='textarea' placeholder='Describe Yourself!'></textarea>
          </p>
          <div class='content'>
            <h1>Optional Information</h1>
          </div>
          <label class='label'>Phone Number</label>
          <p class='control has-icon has-icon-right'>
            <input class='input' placeholder='Text input' type='text' value='+1 *** *** 0535'>
          </p>
          <label class='label'>Work</label>
          <p class='control has-icon has-icon-right'>
            <input class='input' placeholder='Text input' type='text' value='Greater Washington Publishing'>
          </p>
          <label class='label'>School</label>
          <p class='control has-icon has-icon-right'>
            <input class='input' placeholder='Text input' type='text' value='George Mason University'>
          </p>
        </section>
        <footer class='modal-card-foot'>
          <a class='button is-primary modal-save'>Save changes</a>
          <a class='button modal-cancel'>Cancel</a>
        </footer>
      </div>
    </div>
    <div class='section profile-heading'>
      <div class='columns is-mobile is-multiline'>
        <div class='column is-2'>
          <span class='header-icon user-profile-image'>
            <img alt='' src='http://placehold.it/300x225'>
          </span>
        </div>
        <div class='column is-4-tablet is-10-mobile name'>
          <p>
            <span class='title is-bold'>Mr John Smith</span>
            <br>
            <!-- <a class='button is-primary is-outlined' href='#' id='edit-preferences' style='margin: 5px 0'>
              Edit Preferences
            </a> -->
            <br>
          </p>
          <p class='tagline'>
            <strong>Date of Birth:</strong> 01 January 1970
            <br>
            <strong>NHS number:</strong> 123 456 7890
            <br>
            <strong>Primary care contact:</strong> Dr John Smith
          </p>
        </div>
        <div class='column is-2-tablet is-4-mobile has-text-centered'>
          <p class='stat-val'>30</p>
          <p class='stat-key'>searches</p>
        </div>
        <div class='column is-2-tablet is-4-mobile has-text-centered'>
          <p class='stat-val'>10</p>
          <p class='stat-key'>Active conditions</p>
        </div>
        <div class='column is-2-tablet is-4-mobile has-text-centered'>
          <p class='stat-val'>3</p>
          <p class='stat-key'>Procedures in past month</p>
        </div>
      </div>
    </div>
    <div class='profile-options is-fullwidth'>
      <b-tabs v-model="activeTab">
        <b-tab-item label="GP Records">
          <ul>
            <b-table :data="gpRecords" :columns="columns"></b-table>
          </ul>
        </b-tab-item>

        <b-tab-item label="Hospital Records">
            Lorem <br>
            ipsum <br>
            dolor <br>
            sit <br>
            amet.
        </b-tab-item>

        <b-tab-item label="Mental Health">
            What light is light, if Silvia be not seen? <br>
            What joy is joy, if Silvia be not by— <br>
            Unless it be to think that she is by <br>
            And feed upon the shadow of perfection? <br>
            Except I be by Silvia in the night, <br>
            There is no music in the nightingale.
        </b-tab-item>

        <b-tab-item label="Social Care">
            <social-care/>
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</div>
</template>

<script>
import {getGpRecords} from '../services/api'
import SocialCare from './SocialCare.vue'
    export default {
      components: {
        'social-care': SocialCare,
      },
      data() {
        return {
          activeTab: 0,
          showBooks: false,
          gpRecords: [],
          columns: [
            {
              field: 'Date',
              label: 'Date',
            },
            {
              field: 'Rubric',
              label: 'Reason',
            },
            {
              field: 'Notes',
              label: 'Notes',
            },
            {
              field: 'StaffCode',
              label: 'Staff Code',
            }
          ]
        }
      },
      mounted() {
        getGpRecords()
          .then(response => {
            this.gpRecords = response.data.EncountersResult
          })
      }
    }
</script>