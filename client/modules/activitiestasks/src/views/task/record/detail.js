/*
 * This file is part of EspoCRM and/or TreoCrm.
 *
 * EspoCRM - Open Source CRM application.
 * Copyright (C) 2014-2019 Yuri Kuznetsov, Taras Machyshyn, Oleksiy Avramenko
 * Website: http://www.espocrm.com
 *
 * TreoCrm is EspoCRM-based Open Source application.
 * Copyright (C) 2017-2019 TreoLabs GmbH
 * Website: https://treolabs.com
 *
 * TreoCrm as well as EspoCRM is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * TreoCrm as well as EspoCRM is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with EspoCRM. If not, see http://www.gnu.org/licenses/.
 *
 * The interactive user interfaces in modified source and object code versions
 * of this program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU General Public License version 3.
 *
 * In accordance with Section 7(b) of the GNU General Public License version 3,
 * these Appropriate Legal Notices must retain the display of the "EspoCRM" word
 * and "TreoCrm" word.
 */

Espo.define('activitiestasks:views/task/record/detail', 'views/record/detail', function (Dep) {

    return Dep.extend({

        duplicateAction: true,

        setupActionItems: function () {
            Dep.prototype.setupActionItems.call(this);
            if (this.getAcl().checkModel(this.model, 'edit')) {
                if (!~['Completed', 'Canceled'].indexOf(this.model.get('status'))) {
                    this.dropdownItemList.push({
                        'label': 'Complete',
                        'name': 'setCompleted'
                    });
                }

                this.listenToOnce(this.model, 'sync', function () {
                    if (~['Completed', 'Canceled'].indexOf(this.model.get('status'))) {
                        this.removeButton('setCompleted');
                    }
                }, this);
            }
        },

        manageAccessEdit: function (second) {
            Dep.prototype.manageAccessEdit.call(this, second);

            if (second) {
                if (!this.getAcl().checkModel(this.model, 'edit', true)) {
                    this.hideActionItem('setCompleted');
                }
            }
        },

        actionSetCompleted: function (data) {
            var id = data.id;

            this.model.save({
                status: 'Completed'
            }, {
                patch: true,
                success: function () {
                    Espo.Ui.success(this.translate('Saved'));
                }.bind(this),
            });

        },


    });
});

