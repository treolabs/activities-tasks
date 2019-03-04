<?php
/**
 * ActivitiesTasks
 * TreoPIM Premium Plugin
 * Copyright (c) TreoLabs GmbH
 *
 * This Software is the property of TreoLabs GmbH and is protected
 * by copyright law - it is NOT Freeware and can be used only in one project
 * under a proprietary license, which is delivered along with this program.
 * If not, see <http://treopim.com/eula>.
 *
 * This Software is distributed as is, with LIMITED WARRANTY AND LIABILITY.
 * Any unauthorised use of this Software without a valid license is
 * a violation of the License Agreement.
 *
 * According to the terms of the license you shall not resell, sublicense,
 * rent, lease, distribute or otherwise transfer rights or usage of this
 * Software or its derivatives. You may modify the code of this Software
 * for your own needs, if source code is provided.
 */

declare(strict_types=1);

namespace Espo\Modules\ActivitiesTasks\Migration;

use Treo\Core\Migration\AbstractMigration;

/**
 * Class V1Dot8Dot2
 *
 * @author r.zablodskiy@treolabs.com
 */
class V1Dot8Dot2 extends AbstractMigration
{
    /**
     * Up to current
     */
    public function up(): void
    {
        if (!empty($twoLevelTabList = $this->getConfig()->get('twoLevelTabList'))) {
            $changed = false;

            foreach ($twoLevelTabList as $key => $item) {
                if ($item->id == '_delimiter_activity') {
                    $twoLevelTabList[$key]->iconClass = "fas fa-list-alt";
                    $changed = true;
                }
            }

            if ($changed) {
                $this->getConfig()->set('twoLevelTabList', $twoLevelTabList);
                $this->getConfig()->save();
            }
        }
    }
}
